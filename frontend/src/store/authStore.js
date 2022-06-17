import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import axios from '../utils/axios';

const useAuthStore = create(
    devtools(
        persist(
            (set) => ({
                loading: false,
                loggedIn: false,
                user: {
                    email: '',
                    id: '',
                    name: '',
                },
                login: async (email, password) => {
                    set({ loading: true });
                    const res = await axios.post('/user/signin', {
                        email,
                        password,
                    });
                    set({
                        user: {
                            email: res.data.email,
                            id: res.data.id,
                            name: res.data.name,
                        },
                        loading: false,
                        loggedIn: true,
                    });
                },
                logout: async () => {
                    set({
                        loggedIn: false,
                        user: {
                            email: '',
                            id: '',
                            name: '',
                        },
                    });
                },
            }),
            {
                name: 'authStore',
            }
        )
    )
);

export default useAuthStore;
