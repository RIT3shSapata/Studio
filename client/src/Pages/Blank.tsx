import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import StudioToolBox from '../Components/Editor/config/Toolbox';
import Navbar from '../Components/Navbar/Navbar';
import CanvasComponent from '../Components/CanvasComponent/CanvasComponent';
import defaultGame from '../Virtual Machine/config/DefaultProject.json';
import JSONToObject from '../Virtual Machine/utils/JSONToObject';
import useVMStore from '../Store/vmStore';
import VMState from '../types/VMState';
import shallow from 'zustand/shallow';

type Props = {};

const Blank = (props: Props) => {
    const [ele, setEle] = useState<ReactElement[]>([]);
    const renderOnce = useRef<boolean>(false);
    const code = useRef<string>('');

    const {
        vm,
        setVm,
        getCode,
        toggleGetCode,
        execute,
        toggleExecute,
    }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        const newVM = JSONToObject(JSON.stringify(defaultGame));
        setVm(newVM);
        setEle(newVM.initVM());
    }, []);

    useEffect(() => {
        if (getCode) {
            const id = vm.sprites[0].spriteID;
            vm.addInstructions(code.current);
            vm.execute();
            toggleGetCode();
        }
    }, [getCode]);

    return (
        <div className='h-screen w-screen'>
            <Navbar className='h-[10%] w-full' />
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
        </div>
    );
};

export default Blank;
