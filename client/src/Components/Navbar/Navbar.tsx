import React from 'react';

type Props = {};

const Navbar = (props: Props) => {
    return (
        <div className='w-full h-20 bg-[#f2f2f2] flex flex-col justify-around border-4'>
            <div className='bg-white h-[3rem] mr-20 w-11/12 ml-4 pt-2 rounded-lg'>
                <span className='font-bold ml-7'>Studio</span>
            </div>
        </div>
    );
};

export default Navbar;
