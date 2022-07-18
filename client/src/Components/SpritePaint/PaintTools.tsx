import React from 'react';
import {
    Select,
    Brush,
    Fill,
    Line,
    Rectangle,
    Resize,
    Eraser,
    Text,
    Circle,
} from './Tools';

type Props = {};

const PaintTools = (props: Props) => {
    return (
        <div className='w-52 h-full bg-[#F2F2F2] py-10 pl-8'>
            <div className='grid grid-cols-2 h-1/2'>
                <Select />
                <Resize />
                <Brush />
                <Eraser />
                <Fill />
                <Text />
                <Line />
                <Circle />
                <Rectangle />
            </div>
        </div>
    );
};

export default PaintTools;
