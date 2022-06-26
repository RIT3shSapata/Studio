import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useGameStore = create(
    devtools((set) => ({
        game: null,
        setGame: (newGame) => {
            set({
                game: newGame,
            });
        },
    }))
);

export default useGameStore;
