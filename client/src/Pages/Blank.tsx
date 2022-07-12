import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import StudioToolBox from '../Components/Editor/config/Toolbox';
import Navbar from '../Components/Navbar/Navbar';
import defaultGame from '../Virtual Machine/config/DefaultProject.json';
import JSONToObject from '../Virtual Machine/utils/JSONToObject';
import useVMStore from '../Store/vmStore';
import VMState from '../types/VMState';
import shallow from 'zustand/shallow';
import io from 'socket.io-client';
import NavbarState from '../types/NavbarState';
import useNavbarStore from '../Store/navbarStore';
import CostumeEditor from '../Components/CostumeEditor';

type Props = {};

const PROJECT_ID = 1;
const socket = io('ws://localhost:5000', {
    transports: ['websocket'],
});

const Blank = (props: Props) => {
    const [ele, setEle] = useState<ReactElement[]>([]);
    const renderOnce = useRef<boolean>(false);
    const code = useRef<string>('');
    const no = useRef<number>(0);

    const {
        vm,
        setVm,
        getCode,
        toggleGetCode,
        setUpdate,
        xml,
        setXML,
        sync,
        toggleSync,
        execute,
        toggleExecute,
        event,
        toggleEvent,
    }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    const { screen }: NavbarState = useNavbarStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        const newVM = JSONToObject(JSON.stringify(defaultGame));
        setEle(newVM.initVM());
        setVm(newVM);

        document.addEventListener('start_event', (e) => {
            toggleEvent();
        });
        // return () => {
        //     document.removeEventListener('start_event', (e) => {
        //         console.log('removed');
        //     });
        // };
    }, []);

    useEffect(() => {
        if (vm.sprites.length > 0) {
            socket.on('CODE_UPDATED', (xml) => {
                // console.log(xml);
                setXML(xml);
                setUpdate(true);
            });
            socket.on('RUN_CODE', (code_: string) => {
                vm.addAllInstructions(code_);
                vm.executeStart();
                setVm(vm);
            });
            socket.on('connect_error', (err) => {
                console.log(`connect_error due to ${err.message}`);
            });

            socket.on('connect', () => {
                socket.emit('CONNECT_ROOM', PROJECT_ID);
            });

            socket.on('ROOM_CONNECTED', (data) => {
                console.log(data);
            });
        }
        return () => {
            socket.off('connect');
            socket.off('disconnect');
        };
    }, [vm]);

    useEffect(() => {
        if (getCode) {
            vm.addAllInstructions(code.current);
            vm.executeStart();
            setVm(vm);
            toggleGetCode();
        }
    }, [getCode]);

    useEffect(() => {
        if (sync) {
            socket.emit('CODE_CHANGED', { PROJECT_ID, xml });
            toggleSync();
        }
    }, [sync]);

    useEffect(() => {
        if (execute) {
            const co = code.current;
            socket.emit('RUN', { PROJECT_ID, code_: co });
            toggleExecute();
        }
    }, [execute]);

    useEffect(() => {
        if (event) {
            vm.addAllInstructions(code.current);
            vm.executeEvent();
            setVm(vm);
            toggleEvent();
        }
    }, [event]);
    return (
        <div className='h-screen w-screen'>
            <Navbar className='h-[10%] w-full' />
            {screen === 'editor' ? (
                <div className='h-[90%] w-full flex justify-between'>
                    <div id='Editor' className='h-full w-4/6'>
                        <Editor
                            toolBox={StudioToolBox}
                            className='h-full w-full'
                            code={code}
                        />
                    </div>
                    <div className='w-2/6 h-full'>
                        <div
                            id='canvas_container'
                            className='h-full w-full border-2 border-sky-300'>
                            {ele}
                        </div>
                    </div>
                </div>
            ) : screen === 'costume' ? (
                <div className='h-[90%] w-full'>
                    <CostumeEditor />
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default Blank;
