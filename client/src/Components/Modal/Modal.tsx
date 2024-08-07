import React from 'react';

type Props = {
    toggleModal: () => void;
    nextLevel: () => void;
};

const Modal = ({ toggleModal, nextLevel }: Props) => {
    return (
        <div
            className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center z-50'
            id='overlay'>
            <div className='bg-gray-200 py-2 px-3 rounded-xl shadow-xl text-gray-800 h-48 w-80 flex flex-col justify-center items-center'>
                <div className='flex justify-between items-center'>
                    <h4 className='text-3xl font-bold'>Congratulations!!!!</h4>
                    {/* <svg
                        onClick={toggleModal}
                        className='h-6 w-6 cursor-pointer p-1 hover:bg-gray-300 rounded-full'
                        id='close-modal'
                        // fillRule="currentColor"
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'></path>
                    </svg> */}
                </div>
                <div className='mt-2 text-sm'>
                    <p>You completed the Level</p>
                </div>
                <div className='mt-3 flex justify-end space-x-3'>
                    {/* <button className='px-3 py-1 rounded hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900'>
                        Cancel
                    </button> */}
                    <button
                        className='px-3 py-1 bg-green-600 text-gray-200 hover:bg-green-500 rounded'
                        onClick={nextLevel}>
                        Next Level
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
