import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import AngryBirdsToolBox from '../Components/AngryBirds/config/AngryBirdsToolbox';
import AngryBirdsCanvas from '../Components/AngryBirds/AngryBirdsCanvas';
import useGameStore from '../Store/gameStore';
import AngryBirdsLevels from '../Components/AngryBirds/config/AngryBirdsLevels';
import AngryBirdsGameAssets from '../Components/AngryBirds/config/AngryBirdsGameAssets';
import shallow from 'zustand/shallow';
import AngryBirdsGame, {
    AngryBirdsGameType,
} from '../Components/AngryBirds/config/AngryBirdsGame';
import GameState from '../types/GameState';
import Modal from '../Components/Modal/Modal';
import Navbar from '../Components/Navbar/Navbar';

type Props = {};

const AngryBirds = (props: Props) => {
    const code = useRef<string>('');
    const [ele, setEle] = useState<ReactElement | ReactElement[]>(<div />);

    const {
        clearCanvas,
        game,
        getCode,
        loading,
        reset,
        run,
        setGame,
        toggleClearCanvas,
        toggleGetCode,
        toggleLoading,
        toggleReset,
        toggleRun,
        toggleWin,
        win,
    }: GameState = useGameStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        const newGame: AngryBirdsGameType = new AngryBirdsGame();
        newGame.addMazes(AngryBirdsLevels);
        setEle(newGame.initMaze(AngryBirdsCanvas, AngryBirdsGameAssets));
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (getCode) {
            game.addInstructions(7, code.current);
            setGame(game);
            toggleGetCode();
            toggleRun();
        }
    }, [getCode]);

    const nextLevel = () => {
        toggleLoading();
        toggleClearCanvas();
        game.clearLevel();
        game.nextLevel();
        setEle(game.initMaze(AngryBirdsCanvas, AngryBirdsGameAssets));
        setGame(game);
        setTimeout(() => {
            toggleLoading();
        }, 500);
        toggleWin();
    };

    const handleReset = () => {
        toggleLoading();
        game.clearLevel();
        setEle(game.initMaze(AngryBirdsCanvas, AngryBirdsGameAssets));
        setTimeout(() => {
            toggleReset();
            toggleLoading();
        }, 500);
    };
    return (
        <div className='h-screen w-screen'>
            <Navbar />
            <div className='flex justify-between h-full w-full'>
                <div id='angry_birds_editor' className='h-full w-4/6'>
                    <Editor
                        code={code}
                        toolBox={AngryBirdsToolBox}
                        className='h-full w-full'
                    />
                </div>
                <div className='w-2/6 h-full border-r-2 border-slate-500'>
                    <div id='canvas_container' className='w-[400px] h-[400px]'>
                        {loading ? 'loading' : ele}
                    </div>
                    <div className='mt-20 flex gap-2 flex-wrap '>
                        {reset ? (
                            <button
                                className='btn-primary'
                                onClick={handleReset}>
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
                </div>
            </div>
            {win ? <Modal toggleModal={toggleWin} nextLevel={nextLevel} /> : ''}
        </div>
    );
};

export default AngryBirds;
