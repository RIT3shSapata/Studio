import React, { useEffect, useRef, useState } from 'react';
import sprite from '../../assets/sprite.png';

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

const convertToCord = (n) => {
    return n * 150 + 10;
};

const BLOCK_LENGHT = 148;
const BLOCK_WIDHT = 148;

const SPRITE_SHEET_WIDTH = 864;
const SPRITE_SHEET_HEIGHT = 280;
const TRACK_RIGHT = 0;
const TRACK_LEFT = 1;
const COLS = 8;
const ROWS = 2;
const FRAMECOUNT = 8;
const WIDTH = SPRITE_SHEET_WIDTH / COLS;
const HEIGHT = SPRITE_SHEET_HEIGHT / ROWS;
const SPEED = 1;
const FRAMEUPDATE = 5;

const drawSprite = (
    context,
    character,
    srcX,
    srcY,
    spriteWidth,
    spriteHeight
) => {
    context.drawImage(
        character,
        srcX.current,
        srcY.current,
        WIDTH,
        HEIGHT,
        convertToCord(5),
        convertToCord(5),
        spriteWidth,
        spriteHeight
    );
};
const Canvas2 = () => {
    const canvasRef = useRef(null);
    const [spriteWidth, setSpriteWidth] = useState(200);
    const [spriteHeight, setSpriteHeight] = useState(200);
    const [size, setSize] = useState(100);
    //for animating the sprite

    //sprite character
    const character = new Image();
    character.src = sprite;
    const srcX = useRef(0);
    const srcY = useRef(0);

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
        character.onload = () => {
            drawSprite(
                context,
                character,
                srcX,
                srcY,
                spriteWidth,
                spriteHeight
            );
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSpriteWidth((spriteWidth * size) / 100);
        setSpriteHeight((spriteHeight * size) / 100);
    };

    useEffect(() => {
        console.log('works');
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        drawSprite(context, character, srcX, srcY, spriteWidth, spriteHeight);
    }, [spriteWidth, spriteHeight]);

    return (
        <div className="p-3">
            <canvas
                ref={canvasRef}
                className="w-full h-3/4 border-4 border-slate-900"></canvas>
            <div className="mt-8">
                <form onSubmit={handleSubmit}>
                    <label className="m-4">Size:</label>
                    <input
                        type="text"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        className="border-4 border-slate-700 rounded-full p-2 w-16"
                    />
                </form>
            </div>
        </div>
    );
};

export default Canvas2;
