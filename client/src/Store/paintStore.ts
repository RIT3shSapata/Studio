import create from 'zustand';
import { devtools } from 'zustand/middleware';
import Sprite from '../GameEngine/Sprite';
import PaintState from '../types/PaintState';
import SpriteType from '../types/SpriteType';

const usePaintStore = create<PaintState>()(
    devtools((set) => ({
        mode: 'select',
        currentSprite: 1,
        setMode: (newMode) => {
            set({ mode: newMode });
        },
        setCurrentSprite: (newSprite) => {
            set({ currentSprite: newSprite });
        },
    }))
);

export default usePaintStore;
