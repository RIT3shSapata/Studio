import React from 'react';
import BlocklyEditor from '../Components/BlocklyEditor/BlocklyEditor';
import Canvas from '../Components/Canvas/Canvas';

const Game = () => {
    return (
        <div>
            <BlocklyEditor />
            <Canvas />
        </div>
    );
};

export default Game;
