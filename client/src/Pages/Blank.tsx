import React, { useRef } from 'react';
import Editor from '../Components/Editor/Editor';
import StudioToolBox from '../Components/Editor/config/Toolbox';
import Navbar from '../Components/Navbar/Navbar';
import CanvasComponent from '../Components/CanvasComponent/CanvasComponent';

type Props = {};

const Blank = (props: Props) => {
    const code = useRef<string>('');
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
                        <CanvasComponent />
                        <CanvasComponent />
                        <CanvasComponent />
                        <CanvasComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blank;
