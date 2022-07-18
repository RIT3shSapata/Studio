import React from 'react';

type Props = {};

const Text = (props: Props) => {
    return (
        <div className=' w-10 h-10 flex justify-center items-center'>
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
