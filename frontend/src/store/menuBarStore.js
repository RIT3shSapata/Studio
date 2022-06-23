import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useMenuBarStore = create(
    devtools(
        persist(
            (set) => ({
                activePage: 'template',
                share: false,
                run: false,
                save: false,
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
                toggleRun: (val) => {
                    set({
                        run: val,
                    });
                },
                saveCode: (val) => {
                    set({
                        save: val,
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
