import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FacebookLogo from '../../assets/FacebookLogo';
import GoogleLogo from '../../assets/GoogleLogo';
import useAuthStore from '../../store/authStore';
import shallow from 'zustand/shallow';
import { useEffect } from 'react';

const LoginModal = ({ toggleModal }) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { login, user, loading, loggedIn } = useAuthStore(
        (state) => ({
            user: state.user,
            loading: state.loading,
            login: state.login,
            loggedIn: state.loggedIn,
        }),
        shallow
    );
    const handleLogin = async (e) => {
        e.preventDefault();
        await login(email, password);
    };
    useEffect(() => {
        if (loggedIn) {
            toggleModal();
            navigate('/templates');
        }
    }, [loggedIn]);

    return (
        <div
            className='bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center z-50 '
            id='overlay'>
            <div className='bg-gray-200 px-3 py-2 rounded-2xl shadow-xl text-gray-800'>
                <div className='flex justify-between items-center '>
                    <h4 className='text-3xl font-bold'>Login</h4>
                    <svg
                        onClick={toggleModal}
                        className='w-8 h-8 cursor-pointer p-1 hover:bg-gray-300 rounded-full'
                        id='close-modal'
                        fillRule='currentColor'
                        viewBox='0 0 20 20'>
                        <path
                            fillRule='evenodd'
                            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                            clipRule='evenodd'></path>
                    </svg>
                </div>
                <div className='flex my-3'>
                    <button className='flex justify-evenly mx-2'>
                        <FacebookLogo className='h-10 w-8 fill-current text-blue-500' />
                        <span>Facebook</span>
                    </button>
                    <button className='flex mx-2'>
                        <GoogleLogo className='h-10 w-8' />
                        <span>Google</span>
                    </button>
                </div>
                <div className='mt-2 text-sm'>
                    <form onSubmit={handleLogin}>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-sm font-bold'>Email</label>
                            <input
                                type='email'
                                className='w-full'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label className='text-sm font-bold'>
                                Password
                            </label>
                            <input
                                type='password'
                                className='w-full'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='mt-3 flex justify-end space-x-3'>
                            <button
                                className='px-3 py-1 bg-blue-500 text-white hover:bg-blue-400 rounded'
                                onClick={handleLogin}>
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
