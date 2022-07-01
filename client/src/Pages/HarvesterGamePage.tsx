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
    return (
        <div className='h-screen w-screen'>
            <div className='flex justify-between h-full w-full'>
                <div id='harvester_game_editor' className='h-full w-4/6'>
                    <Editor
                        code={code}
                        toolBox={HarvesterToolbox}
                        className='h-full w-full'
                    />
                </div>
                <div className='w-2/6 h-full border-r-2 border-slate-500'>
                    <div id='canvas_container' className='w-[400px] h-[400px'>
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

export default HarvesterGamePage;
