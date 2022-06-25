import React, { useState } from 'react';
import CanvasComponent from '../Components/AngryBirds/CanvasComponent';
import { level1 } from '../Components/AngryBirds/MazeLevel';

const AngryBirds = () => {
    const [sprite, setSprite] = useState(null);
    const [run, setRun] = useState(false);
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
    const handleRight = () => {
        sprite.updateDir(1);
        sprite.updatePos();
        setRun(true);
    };

    const handleLeft = () => {
        sprite.updateDir(0);
        sprite.updatePos();
        setRun(true);
    };
    const handleUp = () => {
        sprite.updateDir(2);
        sprite.updatePos();
        setRun(true);
    };
    const handleDown = () => {
        sprite.updateDir(3);
        sprite.updatePos();
        setRun(true);
    };
    return (
        <div>
            <h1>AngryBirds</h1>
            {/* {canvas} */}
            <div width='400' height='400'>
                <CanvasComponent
                    spriteID={6}
                    x={5}
                    y={5}
                    setSprite={setSprite}
                    sprite={sprite}
                    setRun={setRun}
                    run={run}
                />
            </div>
            <div className='mt-20 flex justify-evenly'>
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
            </div>
        </div>
    );
};

export default AngryBirds;
