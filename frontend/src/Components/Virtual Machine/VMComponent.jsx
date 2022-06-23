import React, { useRef, useEffect } from 'react';
import useCanvasStore from '../../store/canvasStore';
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

const VMComponent = ({ id }) => {
    const canvasRef = useRef(null);
    const requestIDRef = useRef(null);
    const i = useRef(0);
    const j = useRef(0);

    const { canvas, addCanvas, stopAnimation } = useCanvasStore(
        (state) => ({
            canvas: state.canvas,
            addCanvas: state.addCanvas,
            stopAnimation: state.stopAnimation,
        }),
        shallow
    );

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        //to prevent fuzzy rendering
        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        i.current = canvas.width / 5 + (id * canvas.width) / 5;
        j.current = canvas.height / 5;

        const render = () => {
            requestIDRef.current = requestAnimationFrame(render);
            // console.log('render');
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(
                i.current,
                j.current,
                canvas.width / 20,
                0,
                2 * Math.PI
            );
            context.fill();
            // i.current = i.current + 10;
        };
        render();

        addCanvas({
            id,
            move: false,
        });
        return () => {
            cancelAnimationFrame(requestIDRef.current);
        };
    }, []);

    const handleDown = () => {
        return new Promise((resolve, reject) => {
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            const target = j.current + 100;
            const down = () => {
                if (j.current > target) {
                    resolve();
                    return;
                }
                requestIDRef.current = requestAnimationFrame(down);
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(
                    i.current,
                    j.current,
                    canvas.width / 20,
                    0,
                    2 * Math.PI
                );
                context.fill();
                j.current = j.current + 1;
            };
            down();
        });
    };

    useEffect(() => {
        canvas.forEach(async (can) => {
            if (can.id === id && can.move) {
                await handleDown();
                stopAnimation(id);
            }
        });
    }, [canvas]);
    return (
        <div className='absolute top-28 p-5 flex justify-around w-3/4 h-3/4'>
            <canvas
                ref={canvasRef}
                className='w-full h-full border-8 border-slate-900'
                id='canvas'></canvas>
        </div>
    );
};

export default VMComponent;
