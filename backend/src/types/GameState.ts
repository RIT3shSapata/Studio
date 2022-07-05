import { GameType } from './GameType';

export default interface GameState {
    run: boolean;
    win: boolean;
    getCode: boolean;
    loading: boolean;
    clearCanvas: boolean;
    reset: boolean;
    game: GameType;
    toggleRun: () => void;
    toggleWin: () => void;
    toggleGetCode: () => void;
    toggleLoading: () => void;
    toggleClearCanvas: () => void;
    toggleReset: () => void;
    setGame: (newGame: GameType) => void;
}
