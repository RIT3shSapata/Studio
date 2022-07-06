import React, { FunctionComponent, RefObject, useEffect, useRef } from 'react';
import SpriteType from '../../types/SpriteType';
import getPixelRatio from '../../utils/GetPixelRatio';

type Props = {
    sprite: SpriteType;
};

const CanvasComponent: FunctionComponent<Props> = ({ sprite }: Props) => {
    const renderOnce = useRef<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    // useEffect(() => {
    //     const canvas: HTMLCanvasElement | null = canvasRef.current;
    //     if (!canvas) return;
    //     const context: CanvasRenderingContext2D | null | undefined =
    //         canvas.getContext('2d');
    //     if (!context) return;
    //     let ratio = getPixelRatio(context);
    //     const canvasEle = canvas ? canvas : document.createElement('canvas');

    //     let width = getComputedStyle(canvasEle)
    //         .getPropertyValue('width')
    //         .slice(0, -2);
    //     let height = getComputedStyle(canvasEle)
    //         .getPropertyValue('height')
    //         .slice(0, -2);

    //     if (canvas) {
    //         //@ts-ignore
    //         canvas.width = width * ratio;
    //         //@ts-ignore
    //         canvas.height = height * ratio;
    //         canvas.style.width = `${width}px`;
    //         canvas.style.height = `${height}px`;
    //     }

    //     const render = () => {
    //         context.clearRect(0, 0, canvas.width, canvas.height);
    //         context.beginPath();
    //         context.arc(50 * ratio, 60 * ratio, 40 * ratio, 0, 2 * Math.PI);
    //         context.fill();
    //     };
    //     render();
    // }, []);

    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');
        if (!context) return;
        sprite.addContext(context);
        sprite.draw();
    }, []);

    return (
        <div className='absolute border-2 h-[90%]  border-slate-500'>
            <canvas ref={canvasRef} className='h-full w-full' />
        </div>
    );
};

export default CanvasComponent;
