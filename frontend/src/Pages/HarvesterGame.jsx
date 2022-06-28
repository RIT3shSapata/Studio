import React, { useEffect, useRef, useState } from 'react';
import HarvesterGameEditor from '../Components/HarvesterGame/Editor/HarvesterGameEditor';
import HarvesterGameToolbox from '../Components/HarvesterGame/Editor/HarvesterGameToolbox';
import useHarvesterGameStore from '../store/harvesterGameStore';
import shallow from 'zustand/shallow';
import GameLevels from '../Components/HarvesterGame/GameLevels';
import useGameStore from '../store/gameStore';
import Game from '../Components/HarvesterGame/Objects/Game';
import Modal from '../Components/Modal/Modal';

const HarvesterGame = () => {
    const code = useRef(null);
    const [ele, setEle] = useState(null);
    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const {
        run,
        toggleRun,
        getCode,
        toggleGetCode,
        win,
        toggleWin,
        toggleClearCanvas,
        loading,
        toggleLoading,
        reset,
        toggleReset,
    } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
            getCode: state.getCode,
            toggleGetCode: state.toggleGetCode,
            win: state.win,
            toggleWin: state.toggleWin,
            toggleClearCanvas: state.toggleClearCanvas,
            loading: state.loading,
            toggleLoading: state.toggleLoading,
            reset: state.reset,
            toggleReset: state.toggleReset,
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
        if (getCode) {
            game.addInstructions(2, code.current);
            setGame(game);
            toggleGetCode();
            toggleRun();
        }
    }, [getCode]);

    const nextLevel = () => {
        toggleLoading();
        toggleClearCanvas();
        // game.clearLevel();
        game.nextLevel();
        setEle(game.initMaze());
        setGame(game);
        setTimeout(() => {
            toggleLoading();
        }, 500);
        toggleWin();
    };

    const handleReset = () => {
        toggleLoading();
        // game.clearLevel();
        setEle(game.initMaze());
        setTimeout(() => {
            toggleReset();
            toggleLoading();
        }, 500);
    };

    return (
        <div className='h-screen w-screen flex justify-between'>
            <div id='editor' className='w-4/6 h-full'>
                <HarvesterGameEditor
                    code={code}
                    toolbox={HarvesterGameToolbox}
                    className='h-full w-full'
                />
            </div>
            <div className='w-2/6 h-full border-r-2 border-slate-500'>
                <div id='canvas_container' width='400' height='400'>
                    {loading ? 'loading' : ele}
                </div>
                {reset ? (
                    <button className='btn-primary' onClick={handleReset}>
                        Reset
                    </button>
                ) : (
                    <button
                        className='btn-primary '
                        onClick={() => {
                            toggleGetCode();
                        }}>
                        Run
                    </button>
                )}
            </div>
            {win ? <Modal toggleModal={toggleWin} nextLevel={nextLevel} /> : ''}
        </div>
    );
};

export default HarvesterGame;
