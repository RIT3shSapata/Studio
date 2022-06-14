import Blockly from 'blockly';
import React, { useRef, useState } from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import Maze from '../Components/Maze/Maze';
import Modal from '../Components/Modal/Modal';

const Game = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const [modal, setModal] = useState(false);

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
            {modal && 'hello'}
            <MenuBar
                run={true}
                handleRun={handleRun}
                toggleModal={toggleModal}
            />
            <div className="flex">
                <Editor className="h-screen w-full" code={code} />
                {/* <Canvas code={code} run={run} setRun={setRun} /> */}
                <Maze code={code} run={run} setRun={setRun} />
            </div>
            {modal && <Modal toggleModal={toggleModal} />}
        </div>
    );
};

export default Game;
