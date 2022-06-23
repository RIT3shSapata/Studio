import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import axios from '../utils/axios';

const useProjectStore = create(
    devtools(
        persist(
            (set) => ({
                projects: [],
                loading: false,
                getProjects: async (id) => {
                    set({
                        loading: true,
                    });
                    const res = await axios.post('/project', {
                        id,
                    });
                    set({
                        projects: [...res.data],
                        loading: false,
                    });
                },
            }),
            {
                name: 'projectStore',
            }
        )
    )
);

export default useProjectStore;
