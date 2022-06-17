import React from 'react';
import { Link } from 'react-router-dom';
import useMenuBarStore from '../../store/menuBarStore';
import Menu from './Menu';

const MenuBar = ({ run, handleRun, toggleModal, saveCode }) => {
    const { activePage, share, changeShare } = useMenuBarStore((state) => ({
        activePage: state.activePage,
        share: state.share,
        changeShare: state.changeShare,
    }));
    const handleShare = () => {
        changeShare(!share);
    };
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
                <div className="flex justify-between">
                    <div className="flex justify-evenly">
                        <button onClick={toggleModal}>Next Level</button>
                        <button onClick={saveCode}>Save</button>
                        <button onClick={handleShare}>Share</button>
                    </div>
                    <div>
                        {run ? (
                            <button onClick={handleRun}>Run</button>
                        ) : (
                            <Link to="/game">Go to Game</Link>
                        )}
                    </div>
                </div>
            )}
            <Menu />
        </div>
    );
};

export default MenuBar;
