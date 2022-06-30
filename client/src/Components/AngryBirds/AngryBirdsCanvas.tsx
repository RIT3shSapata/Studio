import React, { FunctionComponent, useEffect, useRef, useState } from 'react';
import shallow from 'zustand/shallow';
import useGameStore from '../../Store/gameStore';
import { CanvasPropsType } from '../../types/CanvasPropsTypes';
import GameState from '../../types/GameState';
import getPixelRatio from '../../utils/GetPixelRatio';
import Sprite from '../../GameEngine/Sprite';
import { SpriteType } from '../../types/SpriteType';

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

    return (
        <canvas
            ref={canvasRef}
            className='absolute top-48 right-14 border-4 border-slate-700'
            width='400'
            height='400'></canvas>
    );
};

export default AngryBirdsCanvas;
