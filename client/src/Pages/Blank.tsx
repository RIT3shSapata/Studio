import React, { useRef } from 'react';
import Editor from '../Components/Editor/Editor';
import StudioToolBox from '../Components/Editor/config/Toolbox';

type Props = {};

const Blank = (props: Props) => {
    const code = useRef<string>('');
    return (
        <div className='h-screen w-screen'>
            <Editor
                toolBox={StudioToolBox}
                className='h-full w-full'
                code={code}
            />
        </div>
    );
};

export default Blank;
