import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useMenuBarStore = create(
    devtools(
        persist(
            (set) => ({
                activePage: 'template',
                share: false,
                changePage: (page) => {
                    set({
                        activePage: page,
                    });
                },
                changeShare: (val) => {
                    set({
                        share: val,
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
