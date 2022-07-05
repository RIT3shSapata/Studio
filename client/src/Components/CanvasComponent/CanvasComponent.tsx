import React, { useEffect, useRef } from 'react';
import getPixelRatio from '../../utils/GetPixelRatio';

type Props = {};

const CanvasComponent = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        const canvas: HTMLCanvasElement | null = canvasRef.current;
        if (!canvas) return;
        const context: CanvasRenderingContext2D | null | undefined =
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

        const render = () => {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(50 * ratio, 60 * ratio, 40 * ratio, 0, 2 * Math.PI);
            context.fill();
        };
        render();
    }, []);

    return (
        <div className='absolute border-2 h-[90%]  border-slate-500'>
            <canvas ref={canvasRef} className='h-full w-full' />
        </div>
    );
};

export default CanvasComponent;
