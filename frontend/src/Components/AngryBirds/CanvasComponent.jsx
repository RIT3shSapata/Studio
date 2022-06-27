import React, { useEffect, useRef } from 'react';
import Sprite from './Objects/Sprite';
import useAngryBirdStore from '../../store/angryBirdStore';
import shallow from 'zustand/shallow';
import useGameStore from '../../store/gameStore';

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

const BIRD_FRAMES = 8;

const CanvasComponent = ({ spriteID, cords, properties }) => {
    const canvasRef = useRef(null);

    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const { run, toggleRun, win, toggleWin } = useAngryBirdStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
            win: state.win,
            toggleWin: state.toggleWin,
        }),
        shallow
    );
    // const [sprite, setSprite] = useState(null);

    useEffect(() => {
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
            // game.sprites[0].draw();
        };
        // setSprite(sprite_obj);
    }, []);

    //Animate Function
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
                if (sprite.changeX === 0 && sprite.curY % 8 === 0) {
                    sprite.updateFrame();
                } else if (sprite.changeY === 0 && sprite.curX % 8 === 0) {
                    sprite.updateFrame();
                }
                context.clearRect(
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
            const action = game.run(spriteID);
            setGame(game);
            if (!action) return;
            const id = action.spriteID;
            const instructions = action.instructions;
            let sprite = game.getSprite(spriteID);
            if (id == 6) {
                const animate = async () => {
                    for (var idx = 0; idx < instructions.length; idx++) {
                        var instruction = instructions[idx];
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
                            toggleRun();
                            sprite.updatePos();
                            await move(sprite);
                            if (game.didWin(sprite)) {
                                const goal = game.getSprite(7);
                                goal.erase();
                                toggleWin();
                            }
                        } else {
                            console.log('cant move');
                        }
                    }
                };
                // move();
                animate();
            }
        }
    }, [run, game]);

    return (
        <canvas
            ref={canvasRef}
            className='absolute top-48 left-10 border-4 border-slate-700'
            width='250'
            height='250'></canvas>
    );
};

export default CanvasComponent;
