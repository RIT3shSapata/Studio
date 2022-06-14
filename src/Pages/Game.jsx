import Blockly from 'blockly';
import React, { useRef, useState, useEffect } from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import Maze from '../Components/Maze/Maze';
import Modal from '../Components/Modal/Modal';
import { maze1, maze2 } from '../Components/Maze/maze_map';

const MAZE_LEVELS = [maze1, maze2];
const LEVELS = 2;

const Game = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const [modal, setModal] = useState(false);
    const [level, setLevel] = useState(0);
    const [maze, setMaze] = useState(MAZE_LEVELS[0]);
    const [resetCanvas, setResetCanvas] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    };
    const handleRun = () => {
        console.log(code);
        setRun(true);
    };

    const nextLevel = () => {
        toggleModal();
        const next = (level + 1) % LEVELS;
        setMaze(MAZE_LEVELS[next]);
        setLevel(next);
        setResetCanvas(true);
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
                <Editor
                    className="h-screen w-full"
                    code={code}
                    resetCanvas={resetCanvas}
                />
                {/* <Canvas code={code} run={run} setRun={setRun} /> */}
                <Maze
                    code={code}
                    run={run}
                    setRun={setRun}
                    togalModal={toggleModal}
                    maze={maze}
                    resetCanvas={resetCanvas}
                    setResetCanvas={setResetCanvas}
                />
            </div>
            {modal && <Modal toggleModal={toggleModal} nextLevel={nextLevel} />}
        </div>
    );
};

export default Game;
