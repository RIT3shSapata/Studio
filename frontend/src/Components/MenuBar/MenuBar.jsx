import React from 'react';
import { Link } from 'react-router-dom';
import useMenuBarStore from '../../store/menuBarStore';
import Menu from './Menu';

const MenuBar = () => {
    const { activePage, share, run, toggleRun, changeShare, saveCode } =
        useMenuBarStore((state) => ({
            activePage: state.activePage,
            share: state.share,
            run: state.run,
            toggleRun: state.toggleRun,
            changeShare: state.changeShare,
            saveCode: state.saveCode,
        }));
    const handleShare = () => {
        changeShare(!share);
    };
    return (
        <div className='flex p-4 bg-blue-600'>
            <div className='w-1/3'>
                <Link to='/templates'>
                    <span className='font-bold text-orange-500 text-3xl'>
                        Wiingy Studio
                    </span>
                </Link>
            </div>
            {activePage === 'template' ? (
                <div className='w-1/3 flex justify-center align-middle'>
                    <span>Choose your Templates</span>
                </div>
            ) : (
                // TODO: Change this to a different page value
                <div className='w-1/3 flex justify-between'>
                    <button
                        className='btn-primary'
                        onClick={() => saveCode(true)}>
                        Save
                    </button>
                    <button className='btn-primary' onClick={handleShare}>
                        Share
                    </button>
                    <button
                        className='btn-primary'
                        onClick={() => {
                            toggleRun(true);
                        }}>
                        Run
                    </button>
                </div>
            )}
            <Menu className='w-1/3 flex items-center justify-end mr-5' />
        </div>
    );
};

export default MenuBar;
