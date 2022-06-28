import React, { useEffect, useRef, useState } from 'react';
import Sprite from './Objects/Sprite';
import useHarvesterGameStore from '../../store/harvesterGameStore';
import shallow from 'zustand/shallow';
import useGameStore from '../../store/gameStore';
import HarvesterGameAssets from './HarvesterGameAssets';

const TILE_PROPERTIES = HarvesterGameAssets[1];

const getPixelRatio = (context) => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const AVATAR_FRAMES = 8;

const HarvesterGameCanvas = ({ spriteID, cords, properties }) => {
    const canvasRef = useRef(null);
    const canvasRef2 = useRef(null);
    const [second, setSecond] = useState(false);
    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const { run, toggleRun, win, toggleWin, toggleReset } =
        useHarvesterGameStore(
            (state) => ({
                run: state.run,
                toggleRun: state.toggleRun,
                win: state.win,
                toggleWin: state.toggleWin,
                toggleReset: state.toggleReset,
            }),
            shallow
        );

    useEffect(() => {
        // if (spriteID == 2 || spriteID == 3) {
        //     setSecond(true);
        //     const canvas2 = canvasRef2.current;
        //     if (!canvas2) return;
        //     const context2 = canvas2.getContext('2d');
        //     const cord = cords[0];
        //     console.log(cord);
        //     const tile_img = new Image();
        //     tile_img.src = TILE_PROPERTIES.src;
        //     const tile_sprite = new Sprite(
        //         tile_img,
        //         TILE_PROPERTIES.width,
        //         TILE_PROPERTIES.height,
        //         cord.x,
        //         cord.y,
        //         TILE_PROPERTIES.srcX,
        //         TILE_PROPERTIES.srcY,
        //         context2,
        //         TILE_PROPERTIES.scale,
        //         1,
        //         1,
        //         1
        //     );
        //     tile_img.onload = () => {
        //         tile_sprite.draw();
        //     };
        // }
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let ratio = getPixelRatio(context);
        const canvasEle = canvas ? canvas : document.createElement('canvas');

        let width = getComputedStyle(canvasEle)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvasEle)
            .getPropertyValue('height')
            .slice(0, -2);

        if (canvas) {
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
        let img = new Image();
        img.src = properties.src;
        cords.forEach((cord) => {
            const sprite_obj = new Sprite(
                img,
                properties.width,
                properties.height,
                cord.x,
                cord.y,
                properties.srcX,
                properties.srcY,
                context,
                properties.scale,
                1,
                AVATAR_FRAMES,
                spriteID
            );
            game.addSprite(sprite_obj);
            setGame(game);
        });
        img.onload = () => {
            game.sprites.forEach((sprite) => {
                sprite.draw();
            });
        };
    });

    const move = (sprite) => {
        return new Promise((resolve, reject) => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const animate = () => {
                if (sprite.stopAnimation()) {
                    sprite.changeX = 0;
                    sprite.changeY = 0;
                    resolve();
                    return;
                }
                sprite.requestID = requestAnimationFrame(animate);
                context.clearRect(
                    sprite.curX,
                    sprite.curY,
                    sprite.width * sprite.getPixelRatio() * sprite.scale,
                    sprite.height * sprite.getPixelRatio() * sprite.scale
                );
                sprite.curX = sprite.curX + sprite.changeX;
                sprite.curY = sprite.curY + sprite.changeY;
                sprite.draw();
            };
            sprite.curX = sprite.curX + sprite.changeX;
            sprite.curY = sprite.curY + sprite.changeY;
            animate();
        });
    };

    useEffect(() => {
        if (run) {
            const action = game.run(spriteID);
            console.log(action);
            setGame(game);
            if (!action) return;
            const id = action.spriteID;
            const instructions = action.instructions;
            let sprite = game.getSprite(spriteID);
            let ins_count = 0;
            if (id == 2) {
                const animate = async () => {
                    for (var idx = 0; idx < instructions.length; idx++) {
                        var instruction = instructions[idx];
                        instruction.trim();
                        console.log(instruction);
                        switch (instruction) {
                            case 'move_up':
                                sprite.updateDir(2);
                                break;
                            case 'move_down':
                                sprite.updateDir(3);
                                break;
                            case 'move_left':
                                sprite.updateDir(0);
                                break;
                            case 'move_right':
                                sprite.updateDir(1);
                                break;
                            default:
                                continue;
                        }
                        if (game.canMove(sprite)) {
                            sprite.updatePos();
                            await move(sprite);
                            ins_count++;
                            if (
                                game.didWin(sprite) &&
                                ins_count < instructions.length - 2
                            ) {
                                toggleRun();
                                toggleReset();
                                alert('Continue coding');
                                break;
                            }
                            if (game.didWin(sprite)) {
                                toggleRun();
                                // const goal = game.getSprite(7);
                                // goal.erase();
                                toggleWin();
                            }
                        } else {
                            console.log('cant move');
                        }
                    }
                    if (!game.didWin(sprite)) {
                        toggleRun();
                        toggleReset();
                        alert('Continue coding');
                    }
                };
                // move();
                animate();
            }
        }
    }, [run, game]);
    return (
        <>
            {second ? (
                <canvas
                    ref={canvasRef2}
                    id='extra_tile'
                    className='absolute top-48 right-14 border-4 border-slate-700'
                    width='400'
                    height='400'></canvas>
            ) : (
                ''
            )}
            <canvas
                ref={canvasRef}
                className='absolute top-48 right-14 border-4 border-slate-700'
                width='400'
                height='400'></canvas>
        </>
    );
};

export default HarvesterGameCanvas;
