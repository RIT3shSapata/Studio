import create from 'zustand';
import { devtools } from 'zustand/middleware';
import ModalState from '../types/ModalState';

const useModalStore = create<ModalState>()(
    devtools((set) => ({
        costumeModal: false,
        spriteModal: false,
        backgroundModal: false,
        toggelCostumeModal: () => {
            set((state) => ({
                costumeModal: !state.costumeModal,
            }));
        },
        toggelSpriteModal: () => {
            set((state) => ({
                spriteModal: !state.spriteModal,
            }));
        },
        toggelBackgroundModal: () => {
            set((state) => ({
                backgroundModal: !state.backgroundModal,
            }));
        },
    }))
);

export default useModalStore;
