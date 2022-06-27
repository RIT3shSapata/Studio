import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAngryBirdStore = create(
    devtools((set) => ({
        run: false,
        win: false,
        getCode: false,
        loading: false,
        clearCanvas: false,
        toggleWin: () => {
            set((state) => ({
                win: !state.win,
            }));
        },
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
        toggleClearCanvas: () => {
            set((state) => ({
                clearCanvas: !state.clearCanvas,
            }));
        },
        toggleLoading: () => {
            set((state) => ({
                loading: !state.loading,
            }));
        },
    }))
);

export default useAngryBirdStore;
