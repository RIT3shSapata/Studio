import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAngryBirdStore = create(
    devtools((set) => ({
        run: false,
        game: null,
        getCode: false,
        toggleRun: () => {
            set((state) => ({
                run: !state.run,
            }));
        },
        setGame: (newGame) => {
            set({
                game: newGame,
            });
        },
        toggleGetCode: () => {
            set((state) => ({
                getCode: !state.getCode,
            }));
        },
    }))
);

export default useAngryBirdStore;
