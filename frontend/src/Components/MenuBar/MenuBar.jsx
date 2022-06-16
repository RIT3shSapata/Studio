import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar = ({ run, handleRun, toggleModal, saveCode }) => {
    return (
        <div className="flex p-4 bg-blue-500">
            <div className="w-1/2">
                <Link to="/">
                    <span className="font-bold text-orange-500 text-3xl">
                        Wiingy Studio
                    </span>
                </Link>
            </div>
            <div>
                <button onClick={toggleModal}>Next Level</button>
                <button onClick={saveCode}>Save</button>
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
