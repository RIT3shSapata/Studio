import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import AngryBirdEditor from '../Components/AngryBirds/AngryBirdEditor';
import CanvasComponent from '../Components/AngryBirds/CanvasComponent';
import { level1 } from '../Components/AngryBirds/MazeLevel';
import MazeToolbox from '../Toolbox/MazeToolbox';
import useAngryBirdStore from '../store/angryBirdStore';
import shallow from 'zustand/shallow';
import Game from '../Components/AngryBirds/Objects/Game';

const AngryBirds = () => {
    const code = useRef(null);
    const [sprite, setSprite] = useState(null);
    const [ele, setEle] = useState(null);
    const { run, toggleRun, game, setGame, getCode, toggleGetCode } =
        useAngryBirdStore(
            (state) => ({
                run: state.run,
                game: state.game,
                toggleRun: state.toggleRun,
                setGame: state.setGame,
                getCode: state.getCode,
                toggleGetCode: state.toggleGetCode,
            }),
            shallow
        );
    useEffect(() => {
        const newGame = new Game();
        newGame.addMaze(level1);
        setEle(newGame.initMaze());
        setGame(newGame);
    }, []);
    // const canvas = [];
    // for (let i = 0; i < level1.length; i++) {
    //     for (let j = 0; j < level1[i].length; j++) {
    //         canvas.push(
    //             <CanvasComponent
    //                 key={i + '-' + j}
    //                 spriteID={level1[i][j]}
    //                 x={j}
    //                 y={i}
    //             />
    //         );
    //     }
    // }

    useEffect(() => {
        if (getCode) {
            console.log(code.current);
            game.addInstructions(6, code.current);
            setGame(game);
            toggleRun();
            toggleGetCode();
        }
    }, [getCode]);

    const handleRight = () => {
        sprite.updateDir(1);
        sprite.updatePos();
        toggleRun();
    };

    const handleLeft = () => {
        sprite.updateDir(0);
        sprite.updatePos();
        toggleRun();
    };
    const handleUp = () => {
        sprite.updateDir(2);
        sprite.updatePos();
        toggleRun();
    };
    const handleDown = () => {
        sprite.updateDir(3);
        sprite.updatePos();
        toggleRun();
    };
    return (
        <div className='w-screen h-screen flex justify-between'>
            {/* {canvas} */}
            <div className='w-2/6 h-full border-r-2 border-slate-500'>
                <div width='400' height='400'>
                    {/* {game && (
                        <CanvasComponent
                            spriteID={6}
                            x={5}
                            y={5}
                            setSprite={setSprite}
                            sprite={sprite}
                        />
                    )} */}
                    {ele}
                </div>
                <div className='mt-20 flex gap-2 flex-wrap '>
                    <button className='btn-primary ' onClick={handleRight}>
                        Move right
                    </button>
                    <button className='btn-primary ' onClick={handleLeft}>
                        Move left
                    </button>
                    <button className='btn-primary ' onClick={handleUp}>
                        Move up
                    </button>
                    <button className='btn-primary ' onClick={handleDown}>
                        Move down
                    </button>

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
        </div>
    );
};

export default AngryBirds;
