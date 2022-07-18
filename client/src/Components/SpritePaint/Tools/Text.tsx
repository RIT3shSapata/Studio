import React from 'react';
import shallow from 'zustand/shallow';
import usePaintStore from '../../../Store/paintStore';
import PaintState from '../../../types/PaintState';

type Props = {};

const Text = (props: Props) => {
    const { mode, setMode }: PaintState = usePaintStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const className = mode === 'text' ? 'selected-tool' : 'tool';
    const handleClick = () => {
        setMode('text');
    };
    return (
        <div className={className} onClick={handleClick}>
            <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 278 278'>
                <path d='M254.833 0h-231C15.549 0 8.5 6.716 8.5 15v33c0 8.284 6.716 15 15 15s15-6.716 15-15V30h69v218H89.833c-8.284 0-15 6.716-15 15s6.716 15 15 15h99c8.284 0 15-6.716 15-15s-6.716-15-15-15H170.5V30h69v18c0 8.284 6.716 15 15 15s15-6.716 15-15V15c0-8.284-6.383-15-14.667-15z' />
            </svg>
        </div>
    );
};

export default Text;
