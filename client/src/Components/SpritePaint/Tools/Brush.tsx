import React from 'react';
import shallow from 'zustand/shallow';
import usePaintStore from '../../../Store/paintStore';
import PaintState from '../../../types/PaintState';

type Props = {};

const Brush = (props: Props) => {
    const { mode, setMode }: PaintState = usePaintStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const className = mode === 'brush' ? 'selected-tool' : 'tool';
    const handleClick = () => {
        setMode('brush');
    };
    return (
        <div className={className} onClick={handleClick}>
            <svg
                className='h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 422.555 422.555'>
                <path d='M419.061 11.643c-2.223-2.127-5.45-3.139-9.544-3.139-32.927 0-122.005 65.392-196.859 141.77-42.696 43.557-64.478 74.066-72.961 96.074 6.455 2.162 13.001 5.199 19.671 9.167 5.219 3.105 10.092 6.77 14.468 10.88.006.002.008.004.014.006 8.528 8.007 14.971 17.444 19.188 27.578 21.773-9.709 51.271-32.1 92.405-74.059 84.165-85.872 153.721-189.043 133.618-208.277zM150.175 266.736c-11.455-6.818-22.257-10.794-32.808-12.057-2.466-.295-4.918-.443-7.361-.443-8.065 0-16.189 1.62-24.149 4.817-30.825 12.389-33.835 41.568-36.491 67.315-3.306 32.045-6.979 52.036-39.43 58.957-5.942 1.268-10.125 6.608-9.93 12.682.195 6.074 4.711 11.136 10.723 12.02 18.16 2.67 35.401 4.023 51.246 4.024h.011c34.558 0 63.052-6.296 84.689-18.712 19.855-11.393 33.144-27.572 38.43-46.788 2.911-10.582 3.135-21.488 1.005-31.951-4.085-20.066-16.834-38.497-35.935-49.864z' />
            </svg>
        </div>
    );
};

export default Brush;