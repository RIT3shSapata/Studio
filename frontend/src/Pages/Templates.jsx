import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mazeImg from '../assets/maze.png';
import useAuthStore from '../store/authStore';

const Templates = () => {
    const logout = useAuthStore((state) => state.logout);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/game');
    };
    const blank = () => {
        navigate('/blank');
    };

    const handleLogout = async () => {
        await logout();
        navigate('/');
    };
    return (
        <div className="h-screen w-screen">
            <div className="flex p-4 bg-blue-500">
                <div className="w-1/3">
                    <span className="font-bold text-orange-500 text-3xl">
                        Wiingy Studio
                    </span>
                </div>
                <div className="w-1/3 flex justify-center align-middle">
                    <span>Choose your Templates</span>
                </div>
                <div className="w-1/3 flex justify-end">
                    <button onClick={handleLogout}>Sign Out</button>
                </div>
            </div>
            <div className="w-full h-full bg-gray-900 p-20">
                <div className="grid grid-cols-4 gap-10">
                    <div
                        onClick={blank}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl justify-between hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center align-middle h-full">
                            <div className="flex flex-col justify-center h-full">
                                <span className="text-white text-5xl">+</span>
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Empty Project</span>
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>

                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-2">
                        <div className="flex justify-center">
                            <div className="w-96">
                                <img
                                    src={mazeImg}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex justify-center align-middle mt-4">
                            <span className="text-white">Maze Game</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Templates;
