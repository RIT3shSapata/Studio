import React, { useRef, useState } from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';

const Game = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const handleRun = () => {
        setRun(true);
    };
    return (
        <div>
            <MenuBar run={true} handleRun={handleRun} />
            <div className="flex">
                <Editor className="h-screen w-1/2" code={code} />
                <Canvas code={code} run={run} setRun={setRun} />
            </div>
        </div>
    );
};

export default Game;
