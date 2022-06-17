import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useMenuBarStore = create(
    devtools(
        persist(
            (set) => ({
                activePage: 'template',
                changePage: (page) => {
                    set({
                        activePage: page,
                    });
                },
            }),
            {
                name: 'menuBarStore',
            }
        )
    )
);

export default useMenuBarStore;
