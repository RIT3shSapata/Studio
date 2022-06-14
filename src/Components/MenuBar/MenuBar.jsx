import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = ({ run, handleRun, toggleModal }) => {
    return (
        <div className="flex p-4 bg-blue-500">
            <div className="w-1/2">
                <span className="font-bold text-orange-500 text-3xl">
                    Wiingy Studio
                </span>
            </div>
            <div>
                <button onClick={toggleModal}>Next Level</button>
            </div>
            <div className="w-1/2 flex justify-end">
                {run ? (
                    <button onClick={handleRun}>Run</button>
                ) : (
                    <Link to="/game">Go to Game</Link>
                )}
            </div>
        </div>
    );
};

export default MenuBar;
