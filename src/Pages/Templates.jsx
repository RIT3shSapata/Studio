import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import mazeImg from '../assets/maze.png';

const Templates = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/game');
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
                    <Link to="/">
                        <span className="bg-blue-700 p-3 rounded-xl hover:bg-blue-800">
                            Back
                        </span>
                    </Link>
                </div>
            </div>
            <div className="w-full h-full bg-gray-900 p-20">
                <div className="grid grid-cols-4 gap-10">
                    <div
                        onClick={handleClick}
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
                        className="p-6 bg-gray-600 flex flex-col rounded-xl hover:border-blue-500 hover:border-4">
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
