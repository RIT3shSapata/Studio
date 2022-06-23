import React, { useRef, useState } from 'react';
import VMComponent from '../Components/Virtual Machine/VMComponent';
import useCanvasStore from '../store/canvasStore';
import shallow from 'zustand/shallow';

const VM = () => {
    const [number, setNumber] = useState(0);
    const createCanvas = () => {
        console.log('createCanvas');
        setNumber(number + 1);
    };
    const { animateSprite, stopAnimation } = useCanvasStore((state) => ({
        animateSprite: state.animateSprite,
        stopAnimation: state.stopAnimation,
    }));
    const canvas = [];
    const start_buttons = [];
    const stop_buttons = [];
    for (let i = 0; i < number; i++) {
        canvas.push(<VMComponent key={i} id={i} />);
        start_buttons.push(
            <button
                key={i}
                onClick={() => animateSprite(i)}
                className='btn-primary'>
                Animate Sprite {i}
            </button>
        );
        stop_buttons.push(
            <button
                key={i}
                onClick={() => stopAnimation(i)}
                className='btn-primary'>
                Stop Animate Sprite {i}
            </button>
        );
    }
    return (
        <div>
            <button className='btn-primary' onClick={createCanvas}>
                Create Canvas
            </button>
            <div>{start_buttons}</div>
            <div>{stop_buttons}</div>
            <div>{canvas}</div>
        </div>
    );
};

export default VM;
