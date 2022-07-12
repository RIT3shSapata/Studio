import React from 'react';
import VMState from '../../types/VMState';
import useVMStore from '../../Store/vmStore';
import shallow from 'zustand/shallow';
import NavbarState from '../../types/NavbarState';
import useNavbarStore from '../../Store/navbarStore';

type Props = {
    className: string;
};

const Navbar = ({ className }: Props) => {
    const { toggleSync, toggleExecute }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const { setScreen }: NavbarState = useNavbarStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    return (
        <div className={className}>
            <div className='w-full h-full bg-[#f2f2f2] flex flex-col justify-around border-4'>
                <div className='bg-white h-12 mr-20 w-11/12 ml-4 px-8 rounded-lg flex justify-between'>
                    <div className='flex flex-col justify-center'>
                        <span className='font-bold '>Studio</span>
                    </div>
                    <div className='flex justify-between'>
                        <button
                            className='btn-wiingy-primary'
                            onClick={() => {
                                setScreen('costume');
                            }}>
                            Design
                        </button>
                        <button
                            className='btn-wiingy-primary'
                            onClick={() => {
                                setScreen('editor');
                            }}>
                            Code
                        </button>
                    </div>
                    <div>
                        <button
                            className='btn-wiingy-primary'
                            onClick={() => {
                                // toggleGetCode();
                                toggleExecute();
                            }}>
                            Run
                        </button>
                        <button
                            className='btn-wiingy-primary'
                            onClick={() => {
                                toggleSync();
                            }}>
                            Sync
                        </button>
                    </div>
                    <div
                        onClick={() =>
                            window.open(
                                'https://wiingy.com/schedule_consultation',
                                '_blank'
                            )
                        }
                        className='flex justify-center items-center w-1/6 border-r-2 border-l-2 border-dotted border-zinc-300 hover:cursor-pointer'>
                        <div className='h-6 fill-slate-600 mx-2 '>
                            <svg
                                data-name='Layer 1'
                                className='h-full w-full '
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 122.88 112.92'>
                                <path d='M15.31 87.55a20.54 20.54 0 0 0 1.23 4.65 12.43 12.43 0 0 0 2.75 4.26c3.88 3.85 8.92 3.84 14.44 3.84h2.62c2.27-3.27 7.6-5.56 13.8-5.56 8.27 0 15 4.07 15 9.1s-6.71 9.1-15 9.1c-6.07 0-11.3-2.2-13.65-5.36h-2.77c-7.08 0-13.55 0-19.55-5.94a19.78 19.78 0 0 1-4.38-6.71A28.6 28.6 0 0 1 8 87.55a8.2 8.2 0 0 1-8-8.18v-29.5a8.2 8.2 0 0 1 8.18-8.18h.58c1.48-15.15 11-27 23.87-34.09A61.85 61.85 0 0 1 57.37.2a58.06 58.06 0 0 1 25.95 3.67c14.45 5.71 26.56 17.84 31.25 37.82h.13a8.2 8.2 0 0 1 8.18 8.18v29.5a8.2 8.2 0 0 1-8.18 8.18h-8.18V42.41C102.33 26 92.29 16 80.38 11.32A50 50 0 0 0 58 8.18a53.66 53.66 0 0 0-21.49 6.39C25.37 20.75 17.24 31 16.58 44.05a4 4 0 0 1-.22 1.15v42.35Z' />
                            </svg>
                        </div>
                        <span>Speak to our Advisor</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
