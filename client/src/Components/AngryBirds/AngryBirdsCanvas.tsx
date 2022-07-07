import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import shallow from 'zustand/shallow';
import useGameStore from '../../Store/gameStore';
import { CanvasPropsType } from '../../GameEngine/types/CanvasPropsTypes';
import GameState from '../../types/GameState';
import getPixelRatio from '../../utils/GetPixelRatio';
import Sprite from '../../GameEngine/Sprite';
import GameSpriteType from '../../GameEngine/types/GameSpriteType';
import { actionType } from '../../GameEngine/types/GameType';
import angry_birds_win from './assets/Angry_Birds_Level_Complete_Sound_Effect.mp3';
import useAudio from '../../utils/useAudio';

const BIRD_FRAMES = 8;
const AngryBirdsCanvas: FunctionComponent<CanvasPropsType> = ({
    cords,
    properties,
    spriteID,
}: CanvasPropsType) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
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

    const { toggle } = useAudio({ url: angry_birds_win });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context: CanvasRenderingContext2D | null =
            canvas.getContext('2d');
        if (!context) return;
        let ratio = getPixelRatio(context);
        const canvasEle = canvas ? canvas : document.createElement('canvas');
        let width = getComputedStyle(canvasEle)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvasEle)
            .getPropertyValue('height')
            .slice(0, -2);
        if (canvas) {
            //@ts-ignore
            canvas.width = width * ratio;
            //@ts-ignore
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }
        let img = new Image();
        img.src = properties.src;
        cords.forEach((cord) => {
            const sprite_obj: GameSpriteType = new Sprite(
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
                BIRD_FRAMES,
                spriteID
            );
            // sprite_obj.draw();
            game.addSprite(sprite_obj);
            setGame(game);
        });
        img.onload = () => {
            game.sprites.forEach((sprite) => {
                sprite.draw();
            });
        };
    }, []);

    //Animate Function
    const move = (sprite: GameSpriteType) => {
        return new Promise((resolve, reject) => {
            const canvas = canvasRef.current;
            if (!canvas) return;
            const context = canvas.getContext('2d');
            const animate = () => {
                if (sprite.stopAnimation()) {
                    sprite.changeX = 0;
                    sprite.changeY = 0;
                    resolve(() => {});
                    return;
                }
                requestAnimationFrame(animate);
                if (sprite.changeX === 0 && sprite.curY % 8 === 0) {
                    sprite.updateFrame();
                } else if (sprite.changeY === 0 && sprite.curX % 8 === 0) {
                    sprite.updateFrame();
                }
                context?.clearRect(
                    sprite.curX,
                    sprite.curY,
                    sprite.width,
                    sprite.height
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
            const action: actionType | undefined = game.run(spriteID);
            setGame(game);
            if (!action) return;
            const id: number = action.spriteID;
            const instructions = action.instructions;
            let sprite: GameSpriteType | undefined = game.getSprite(spriteID);
            let ins_count = 0;
            if (id === 7) {
                const animate = async () => {
                    for (var idx = 0; idx < instructions.length; idx++) {
                        var instruction = instructions[idx];
                        switch (instruction) {
                            case 'move_up':
                                sprite?.updateDir(2);
                                break;
                            case 'move_down':
                                sprite?.updateDir(3);
                                break;
                            case 'move_left':
                                sprite?.updateDir(0);
                                break;
                            case 'move_right':
                                sprite?.updateDir(1);
                                break;
                            default:
                                continue;
                        }
                        console.log(sprite);
                        if (sprite && game.canMove(sprite)) {
                            sprite.updatePos();
                            await move(sprite);
                            ins_count++;
                            if (
                                game.didWin() &&
                                ins_count < instructions.length - 2
                            ) {
                                toggleRun();
                                toggleReset();
                                alert('Continue coding');
                                break;
                            }
                            if (game.didWin()) {
                                toggle().then(() => {
                                    toggleWin();
                                });
                                toggleRun();
                                const goal: GameSpriteType | undefined =
                                    game.getSprite(8);
                                goal?.erase();
                            }
                        } else {
                            alert('You can not move there');
                            // console.log('cant move');
                        }
                    }
                    if (!game.didWin()) {
                        console.log('works');
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
        <div className='absolute xl:top-48 xl:right-12 2xl:top-48 2xl:right-28 border-4 border-slate-700'>
            <canvas
                ref={canvasRef}
                className='xl:h-[20rem] xl:w-[20rem] 2xl:h-[25rem] 2xl:w-[25rem] '></canvas>
        </div>
    );
};

export default AngryBirdsCanvas;
