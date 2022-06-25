import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAngryBirdStore = create(
    devtools((set) => ({
        run: false,
        toggleRun: () => {
            set((state) => ({
                run: !state.run,
            }));
        },
    }))
);

export default useAngryBirdStore;
