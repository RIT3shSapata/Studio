import React from 'react';
import shallow from 'zustand/shallow';
import usePaintStore from '../../../Store/paintStore';
import PaintState from '../../../types/PaintState';

type Props = {};

const Eraser = (props: Props) => {
    const { mode, setMode }: PaintState = usePaintStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const className = mode === 'erase' ? 'selected-tool' : 'tool';
    const handleClick = () => {
        setMode('erase');
    };
    return (
        <div className={className} onClick={handleClick}>
            <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 256.001 256'>
                <path fill='none' d='M0 0h256v256H0z' />
                <path d='M216.001 207.833h-85.65725l34.72949-34.72949.0166-.01465.01465-.0166 56.55371-56.55274a24.02962 24.02962 0 0 0 0-33.94141l-45.25488-45.25487a24.0007 24.0007 0 0 0-33.94141 0L85.90283 93.88232l-.01025.00928-.00928.01026-56.55908 56.55908a24.00066 24.00066 0 0 0 0 33.9414l37.08887 37.08789a8.00232 8.00232 0 0 0 5.65722 2.34278H216.001a8 8 0 0 0 0-16ZM153.77637 48.6377a7.99708 7.99708 0 0 1 11.3125 0l45.25488 45.25488a8.00888 8.00888 0 0 1 0 11.31347l-50.91113 50.91114-56.56787-56.56787Z' />
            </svg>
        </div>
    );
};

export default Eraser;
