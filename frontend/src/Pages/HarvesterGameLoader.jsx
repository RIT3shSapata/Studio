import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';
import Loader from '../Components/Common/Loader';
import useAuthStore from '../store/authStore';
import axios from '../utils/axios';
import { Outlet, useNavigate } from 'react-router-dom';

const HarvesterGameLoader = () => {
    const navigate = useNavigate();
    const { user } = useAuthStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        if (user) {
            const getGame = async () => {
                const res = await axios.post('/getGame', {
                    authorID: user.id,
                    name: 'harvester',
                });
                if (res.status === 200) {
                    setTimeout(() => {
                        navigate(`/harvest/${res.data.id}`, {
                            replace: true,
                        });
                    }, 1000);
                    console.log(res.data);
                } else {
                    const new_res = await axios.post('/createGame', {
                        name: 'harvester',
                        authorID: user.id,
                        code: '',
                        game: '',
                    });
                    setTimeout(() => {
                        navigate(`/harvest/${res.data.id}`, {
                            replace: true,
                        });
                    }, 1000);
                }
            };
            getGame();
        }
    }, []);

    return (
        <div className='h-screen w-screen bg-gray-900 flex justify-center items-center'>
            <div className='flex flex-col items-center justify-between'>
                <Loader className='h-20 w-20 stroke-orange-700' />
                <h1 className='text-3xl text-orange-700 font-bold'>
                    Loading Game
                </h1>
            </div>
            <Outlet />
        </div>
    );
};

export default HarvesterGameLoader;
