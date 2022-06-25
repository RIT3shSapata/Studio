import create from 'zustand';
import { devtools } from 'zustand/middleware';

const useAngryBirdStore = create(
    devtools((set) => ({
        sprites: [],
        addSprite: (sprite) => {
            set((state) => ({
                sprites: [...state.sprites, sprite],
            }));
        },
    }))
);
