import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import Game from '../GameEngine/Game';
import GameState from '../types/GameState';

const useGameStore = create<GameState>()(
    devtools((set) => ({
        run: false,
        win: false,
        getCode: false,
        loading: false,
        clearCanvas: false,
        reset: false,
        game: new Game(),
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
        toggleReset: () => {
            set((state) => ({
                reset: !state.reset,
            }));
        },
        setGame(newGame) {
            set({
                game: newGame,
            });
        },
    }))
);

export default useGameStore;
