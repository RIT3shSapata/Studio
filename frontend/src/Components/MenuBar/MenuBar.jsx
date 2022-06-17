import React from 'react';
import { Link } from 'react-router-dom';
import useMenuBarStore from '../../store/menuBarStore';
import Menu from './Menu';

const MenuBar = ({ run, handleRun, toggleModal, saveCode }) => {
    const activePage = useMenuBarStore((state) => state.activePage);
    return (
        <div className="flex p-4 bg-blue-500">
            <div className="w-1/2">
                <Link to="/">
                    <span className="font-bold text-orange-500 text-3xl">
                        Wiingy Studio
                    </span>
                </Link>
            </div>
            {activePage === 'template' ? (
                <div className="w-1/3 flex justify-center align-middle">
                    <span>Choose your Templates</span>
                </div>
            ) : (
                // TODO: Change this to a different page value
                <>
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
                </>
            )}
            <Menu />
        </div>
    );
};

export default MenuBar;
