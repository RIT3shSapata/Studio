import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import AngryBirdEditor from '../Components/AngryBirds/AngryBirdEditor';
import CanvasComponent from '../Components/AngryBirds/CanvasComponent';
import MazeLevels from '../Components/AngryBirds/MazeLevel';
import MazeToolbox from '../Toolbox/MazeToolbox';
import useAngryBirdStore from '../store/angryBirdStore';
import shallow from 'zustand/shallow';
import Game from '../Components/AngryBirds/Objects/Game';
import useGameStore from '../store/gameStore';
import Modal from '../Components/Modal/Modal';

const AngryBirds = () => {
    const code = useRef(null);
    const [sprite, setSprite] = useState(null);
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
    } = useAngryBirdStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
            getCode: state.getCode,
            toggleGetCode: state.toggleGetCode,
            win: state.win,
            toggleWin: state.toggleWin,
            toggleClearCanvas: state.toggleClearCanvas,
        }),
        shallow
    );
    useEffect(() => {
        const newGame = new Game();
        newGame.addMaze(MazeLevels);
        setEle(newGame.initMaze());
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (getCode) {
            game.addInstructions(6, code.current);
            setGame(game);
            toggleGetCode();
            toggleRun();
        }
    }, [getCode]);

    const nextLevel = () => {
        game.nextLevel();
        setEle(game.initMaze());
        setGame(game);
        toggleWin();
    };

    useEffect(() => {
        console.log(ele);
    }, [ele]);
    return (
        <div className='w-screen h-screen flex justify-between'>
            <div className='w-2/6 h-full border-r-2 border-slate-500'>
                <div width='400' height='400'>
                    {console.log(ele)}
                    {ele}
                </div>
                <div className='mt-20 flex gap-2 flex-wrap '>
                    <button
                        className='btn-primary '
                        onClick={() => {
                            toggleGetCode();
                        }}>
                        Run
                    </button>
                </div>
            </div>
            <div id='editor' className='w-4/6 h-full'>
                <AngryBirdEditor
                    code={code}
                    toolbox={MazeToolbox}
                    className='h-full w-full'
                />
            </div>
            {win ? <Modal toggleModal={toggleWin} nextLevel={nextLevel} /> : ''}
        </div>
    );
};

export default AngryBirds;
