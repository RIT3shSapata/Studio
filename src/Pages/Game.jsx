import React from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';
import Editor from '../Components/Editor/Editor';

const Game = () => {
    return (
        <div>
            <Editor />
            <Canvas />
        </div>
    );
};

export default Game;
