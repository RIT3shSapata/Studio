import React, { useEffect, useRef, useState } from 'react';
import HarvesterGameEditor from '../Components/HarvesterGame/Editor/HarvesterGameEditor';
import HarvesterGameToolbox from '../Components/HarvesterGame/Editor/HarvesterGameToolbox';
import useHarvesterGameStore from '../store/harvesterGameStore';
import shallow from 'zustand/shallow';
import GameLevels from '../Components/HarvesterGame/GameLevels';
import useGameStore from '../store/gameStore';
import Game from '../Components/HarvesterGame/Objects/Game';

const HarvesterGame = () => {
    const code = useRef(null);
    const [ele, setEle] = useState(null);
    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const { run, toggleRun } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
        }),
        shallow
    );

    useEffect(() => {
        const newGame = new Game();
        newGame.addMaze(GameLevels);
        setEle(newGame.initMaze());
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (run) {
            console.log(code.current);
        }
    }, [run]);

    return (
        <div className='h-screen w-screen flex justify-between'>
            <div id='editor' className='w-4/6 h-full'>
                <HarvesterGameEditor
                    code={code}
                    toolbox={HarvesterGameToolbox}
                    className='h-full w-full'
                />
            </div>
            <div>
                <button className='btn-primary' onClick={toggleRun}>
                    Run
                </button>
                {ele}
            </div>
        </div>
    );
};

export default HarvesterGame;
