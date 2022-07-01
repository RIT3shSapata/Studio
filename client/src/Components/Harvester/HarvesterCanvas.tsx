import React, { FunctionComponent, useEffect, useRef } from 'react';
import shallow from 'zustand/shallow';
import useGameStore from '../../Store/gameStore';
import { CanvasPropsType } from '../../types/CanvasPropsTypes';
import GameState from '../../types/GameState';
import getPixelRatio from '../../utils/GetPixelRatio';
import Sprite from '../../GameEngine/Sprite';
import Object from '../../GameEngine/Object';
import { SpriteType } from '../../types/SpriteType';
import { actionType } from '../../types/GameType';
import { ObjectType } from '../../types/ObjectType';

type Props = {};

const AVATAR_FRAMES = 8;

const HarvesterCanvas: FunctionComponent<CanvasPropsType> = ({
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
            if (properties.type === 'sprite' || properties.type === 'goal') {
                const sprite_obj: SpriteType = new Sprite(
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
                img.onload = () => {
                    game.sprites.forEach((sprite) => {
                        sprite.draw();
                    });
                };
            } else {
                const obj: ObjectType = new Object(
                    img,
                    properties.width,
                    properties.height,
                    cord.x,
                    cord.y,
                    properties.srcX,
                    properties.srcY,
                    context,
                    properties.scale,
                    AVATAR_FRAMES
                );
                game.addObject(obj);
                setGame(game);
                img.onload = () => {
                    game.objects.forEach((object) => {
                        object.draw();
                    });
                };
            }
        });
    }, []);

    const move = (sprite: SpriteType) => {
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
                context?.clearRect(
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
            setGame(game);
            if (!action) return;
            const id = action.spriteID;
            const instructions = action.instructions;
            let sprite = game.getSprite(spriteID);
            let ins_count = 0;
            if (id === 3) {
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
                            case 'pick_corn':
                                const pos:
                                    | undefined
                                    | {
                                          x: number;
                                          y: number;
                                      } = sprite?.getCords();
                                if (!pos) return;
                                const goal: SpriteType | undefined =
                                    game.getGoal(3, pos.x, pos.y);
                                if (goal) {
                                    goal.erase();
                                    game.score = game.score + 1;
                                    setGame(game);
                                } else {
                                    toggleRun();
                                    toggleReset();
                                    alert('Continue coding');
                                    return;
                                }
                                if (game.didWin()) {
                                    toggleRun();
                                    toggleWin();
                                }
                            default:
                                continue;
                        }
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
                        } else {
                            console.log('cant move');
                        }
                    }
                    if (!game.didWin()) {
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
        <div className='absolute top-48 right-14 border-4 border-slate-700'>
            <canvas ref={canvasRef} width='400' height='400'></canvas>
        </div>
    );
};

export default HarvesterCanvas;
