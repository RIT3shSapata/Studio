import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import HarvesterToolbox from '../Components/Harvester/config/HarvesterToolbox';
import HarvesterCanvas from '../Components/Harvester/HarvesterCanvas';
import HarvesterLevels from '../Components/Harvester/config/HarvesterLevels';
import HarvesterGameAssets from '../Components/Harvester/config/HarvesterGameAssets';
import HarvesterGame, {
    HarvesterGameType,
} from '../Components/Harvester/config/HarvesterGame';
import GameState from '../types/GameState';
import usegameStore from '../Store/gameStore';
import shallow from 'zustand/shallow';
import Modal from '../Components/Modal/Modal';
import useGameStore from '../Store/gameStore';
import Navbar from '../Components/Navbar/Navbar';

type Props = {};

const HarvesterGamePage = (props: Props) => {
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
        const newGame: HarvesterGameType = new HarvesterGame();
        newGame.addMazes(HarvesterLevels);
        setEle(newGame.initMaze(HarvesterCanvas, HarvesterGameAssets));
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (getCode) {
            game.addInstructions(3, code.current);
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
        setEle(game.initMaze(HarvesterCanvas, HarvesterGameAssets));
        setGame(game);
        setTimeout(() => {
            toggleLoading();
        }, 500);
        toggleWin();
    };

    const handleReset = () => {
        toggleLoading();
        game.clearLevel();
        setEle(game.initMaze(HarvesterCanvas, HarvesterGameAssets));
        setTimeout(() => {
            toggleReset();
            toggleLoading();
        }, 500);
    };
    const handleRight = () => {
        game.addInstructions(3, 'move_right');
        setGame(game);
        toggleRun();
    };
    const handleLeft = () => {
        game.addInstructions(3, 'move_left');
        setGame(game);
        toggleRun();
    };
    const handleUp = () => {
        game.addInstructions(3, 'move_up');
        setGame(game);
        toggleRun();
    };
    const handleDown = () => {
        game.addInstructions(3, 'move_down');
        setGame(game);
        toggleRun();
    };
    const pickCorn = () => {
        game.addInstructions(3, 'pick_corn');
        setGame(game);
        toggleRun();
    };
    return (
        <div className='h-screen w-screen'>
            <Navbar className='h-[10%] w-full' />
            <div className='flex justify-between h-[90%] w-full'>
                <div id='harvester_game_editor' className='h-full w-4/6'>
                    <Editor
                        code={code}
                        toolBox={HarvesterToolbox}
                        className='h-full w-full'
                    />
                </div>
                <div className='w-2/6 h-full border-r-2 border-slate-500'>
                    <div id='canvas_container' className='w-[400px] h-[400px]'>
                        {loading ? 'loading' : ele}
                    </div>
                    <div className='mt-10 ml-48 2xl:mt-48 2xl:ml-72 flex gap-2 flex-wrap '>
                        {reset ? (
                            <button
                                className='btn-wiingy-primary'
                                onClick={handleReset}>
                                Reset
                            </button>
                        ) : (
                            <button
                                className='btn-wiingy-primary '
                                onClick={() => {
                                    toggleGetCode();
                                }}>
                                Run
                            </button>
                        )}
                    </div>
                    <div className=' p-10 flex gap-2 flex-wrap m-auto'>
                        <div className='grid grid-cols-5 gap-2 h-24 '>
                            <button
                                className='btn-wiingy-primary text-sm h-1/2'
                                onClick={handleUp}>
                                Up
                            </button>
                            <button
                                className='btn-wiingy-primary text-sm h-1/2'
                                onClick={handleDown}>
                                Down
                            </button>
                            <button
                                className='btn-wiingy-primary text-sm h-1/2'
                                onClick={handleLeft}>
                                Left
                            </button>
                            <button
                                className='btn-wiingy-primary text-sm h-1/2'
                                onClick={handleRight}>
                                Right
                            </button>
                            <button
                                className='btn-wiingy-primary text-sm h-1/2'
                                onClick={pickCorn}>
                                Pick Corn
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {win ? <Modal toggleModal={toggleWin} nextLevel={nextLevel} /> : ''}
        </div>
    );
};

export default HarvesterGamePage;
