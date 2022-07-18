import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';

type Props = {};

const PaintEditor = (props: Props) => {
    const renderOnce = useRef<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        if (!canvasRef.current) return;
        const canvas = new fabric.Canvas(canvasRef.current, {
            backgroundColor: '#ffffff',
        });
        setCanvas(canvas);
    }, []);

    return (
        <div className='bg-emerald-300 w-full h-full flex justify-center'>
            <canvas className='border-4 border-slate-500 w-4/5 h-3/4 mt-10'></canvas>
        </div>
    );
};

export default PaintEditor;
