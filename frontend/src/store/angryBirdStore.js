import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAngryBirdStore = create(
    devtools((set) => ({
        run: false,
        getCode: false,
        toggleRun: () => {
            set((state) => ({
                run: !state.run,
            }));
        },
        toggleGetCode: () => {
            set((state) => ({
                getCode: !state.getCode,
            }));
        },
    }))
);

export default useAngryBirdStore;
