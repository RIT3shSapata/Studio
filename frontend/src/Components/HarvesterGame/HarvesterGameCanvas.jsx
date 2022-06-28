import React, { useEffect, useRef } from 'react';
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
    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const { run, toggleRun } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
        }),
        shallow
    );

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
            if (spriteID == 2 || spriteID == 3) {
                console.log('works');
                const tile_img = new Image();
                tile_img.src = TILE_PROPERTIES.src;
                const tile_sprite = new Sprite(
                    tile_img,
                    TILE_PROPERTIES.width,
                    TILE_PROPERTIES.height,
                    cord.x,
                    cord.y,
                    TILE_PROPERTIES.srcX,
                    TILE_PROPERTIES.srcY,
                    context,
                    TILE_PROPERTIES.scale,
                    1
                );
                tile_img.onload = () => {
                    tile_sprite.draw();
                };
            }
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
            // if (spriteID == 3) {
            //     let sprite = game.getSprite(1);
            //     sprite.curX = sprite_obj.curX;
            //     sprite.curY = sprite_obj.curY;
            //     console.log(sprite);
            //     sprite.draw();
            // }
            game.addSprite(sprite_obj);
            setGame(game);
        });
        img.onload = () => {
            game.sprites.forEach((sprite) => {
                sprite.draw();
            });
        };
    });

    return (
        <canvas
            ref={canvasRef}
            className='absolute top-48 right-14 border-4 border-slate-700'
            width='400'
            height='400'></canvas>
    );
};

export default HarvesterGameCanvas;
