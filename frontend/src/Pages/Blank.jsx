import React, { useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import toolbox from '../Toolbox/toolbox';

const Blank = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const [modal, setModal] = useState(false);
    const [resetCanvas, setResetCanvas] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    };
    const handleRun = () => {
        console.log(code);
        setRun(true);
    };
    return (
        <div className="h-full">
            <MenuBar
                run={true}
                handleRun={handleRun}
                toggleModal={toggleModal}
            />
            <div className="flex">
                <Editor
                    className="h-screen w-full"
                    code={code}
                    resetCanvas={resetCanvas}
                    toolbox={toolbox}
                />
            </div>
        </div>
    );
};

export default Blank;