import React, { useEffect, useRef } from 'react';
import background from './assets/background.png';
import bird from './assets/move_avatar_1.png';
import obstacle from './assets/obstacle.png';
import goal_idle from './assets/goal_idle.gif';
import tile from './assets/tiles.png';
import Sprite from './Objects/Sprite';
import Object from './Objects/Object';
import useAngryBirdStore from '../../store/angryBirdStore';
import shallow from 'zustand/shallow';

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

const CanvasComponent = ({ spriteID, x, y, setSprite, sprite }) => {
    const canvasRef = useRef(null);
    const { run, toggleRun, game, setGame } = useAngryBirdStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
            game: state.game,
            setGame: state.setGame,
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
        let srcX = 0;
        let srcY = 0;
        switch (spriteID) {
            case 0:
                img.src = tile;
                srcX = 150;
                break;
            case 1:
                img.src = tile;
                srcX = 150;
                break;
            case 2:
                img.src = tile;
                srcX = 150;
                break;
            case 3:
                img.src = tile;
                srcX = 150;
                break;
            case 4:
                img.src = tile;
                srcX = 150;
                break;
            case 5:
                img.src = obstacle;
                break;
            case 6:
                img.src = bird;
                srcX = 150;
                break;
            case 7:
                img.src = goal_idle;
                break;
            case 8:
                img.src = background;
                break;
        }
        const sprite_obj = new Sprite(
            img,
            150,
            192,
            x,
            y,
            srcX,
            srcY,
            context,
            1,
            BIRD_FRAMES
        );
        img.onload = () => {
            sprite_obj.draw();
            console.log(img.src);
        };
        game.addSprite(sprite_obj);
        setGame(game);
        setSprite(sprite_obj);
    }, []);

    //Animate Function
    const move = () => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const animate = () => {
            if (sprite.stopAnimation()) {
                sprite.changeX = 0;
                sprite.changeY = 0;
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
    };

    useEffect(() => {
        if (run && game.queue.length > 0) {
            console.log(game.queue);
            let i;
            game.queue.forEach((instruction, idx) => {
                if (instruction.spriteID === spriteID) {
                    i = idx;
                }
            });
            console.log(i);
            // move();
            toggleRun();
        }
    }, [run, game]);

    return (
        <canvas
            ref={canvasRef}
            className='relative top-10 left-10 border-4 border-slate-700'
            width='400'
            height='400'></canvas>
    );
};

export default CanvasComponent;
