import Blockly from 'blockly';
import React, { useRef, useState } from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import Maze from '../Components/Maze/Maze';

const Game = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const handleRun = () => {
        console.log(code);
        setRun(true);
    };
    return (
        <div className="h-full">
            <MenuBar run={true} handleRun={handleRun} />
            <div className="flex">
                <Editor className="h-screen w-full" code={code} />
                {/* <Canvas code={code} run={run} setRun={setRun} /> */}
                <Maze code={code} run={run} setRun={setRun} />
            </div>
        </div>
    );
};

export default Game;
