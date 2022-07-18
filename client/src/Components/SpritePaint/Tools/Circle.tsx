import React from 'react';
import shallow from 'zustand/shallow';
import usePaintStore from '../../../Store/paintStore';
import PaintState from '../../../types/PaintState';

type Props = {};

const Circle = (props: Props) => {
    const { mode, setMode }: PaintState = usePaintStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const className = mode === 'circle' ? 'selected-tool' : 'tool';
    const handleClick = () => {
        setMode('circle');
    };
    return (
        <div className={className} onClick={handleClick}>
            <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 29.107 29.107'>
                <path d='M14.558 2.079c6.877 0 12.471 5.597 12.471 12.473 0 6.877-5.594 12.476-12.471 12.476-6.879 0-12.478-5.599-12.478-12.476 0-6.876 5.599-12.473 12.478-12.473m0-2.079C6.563 0 0 6.562 0 14.552c0 7.995 6.563 14.555 14.558 14.555s14.549-6.56 14.549-14.555C29.106 6.562 22.552 0 14.558 0z' />
            </svg>
        </div>
    );
};

export default Circle;
