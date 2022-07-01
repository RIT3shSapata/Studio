import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const Landing = (props: Props) => {
    const navigate = useNavigate();
    const handleClick = (to: string) => {
        navigate(to);
    };
    return (
        <div className='h-screen w-screen'>
            <div className='w-full h-full bg-gray-900 p-20'>
                <div className='w-2/12 mb-8 h-11 '>
                    <ul className='flex text-white w-full h-full'>
                        <li className='flex w-1/2 justify-around hover:bg-gray-800 align-bottom'>
                            <span className='flex border-b-2 text-orange-500 border-orange-500 align-baseline'>
                                Templates
                            </span>
                        </li>
                        {/* <li className='flex w-1/2 justify-around'>Templates</li> */}
                    </ul>
                </div>
                <div className='grid grid-cols-4 gap-10'>
                    <div
                        // onClick={blank}
                        className='p-6 bg-gray-600 flex flex-col rounded-xl justify-between hover:border-blue-500 hover:border-2 hover:cursor-pointer'>
                        <div className='flex justify-center align-middle h-full'>
                            <div className='flex flex-col justify-center h-full'>
                                <span className='text-white text-5xl'>+</span>
                            </div>
                        </div>
                        <div className='flex justify-center align-middle mt-4'>
                            <span className='text-white'>Empty Project</span>
                        </div>
                    </div>
                    <div
                        onClick={() => handleClick('/angry-birds')}
                        className='p-6 bg-gray-600 flex flex-col rounded-xl justify-between hover:border-blue-500 hover:border-2 hover:cursor-pointer'>
                        <div className='flex justify-center align-middle h-full'>
                            <div className='flex flex-col justify-center h-full'>
                                <span className='text-white text-5xl'>+</span>
                            </div>
                        </div>
                        <div className='flex justify-center align-middle mt-4'>
                            <span className='text-white'>Angry Birds</span>
                        </div>
                    </div>
                    <div
                        onClick={() => handleClick('/harvester')}
                        className='p-6 bg-gray-600 flex flex-col rounded-xl justify-between hover:border-blue-500 hover:border-2 hover:cursor-pointer'>
                        <div className='flex justify-center align-middle h-full'>
                            <div className='flex flex-col justify-center h-full'>
                                <span className='text-white text-5xl'>+</span>
                            </div>
                        </div>
                        <div className='flex justify-center align-middle mt-4'>
                            <span className='text-white'>Harvester</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
