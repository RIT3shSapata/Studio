import create from 'zustand';
import { devtools } from 'zustand/middleware';
import NavbarState from '../types/NavbarState';

const useNavbarStore = create<NavbarState>()(
    devtools((set) => ({
        screen: 'editor',
        setScreen: (newScreen: 'editor' | 'costume') => {
            set({
                screen: newScreen,
            });
        },
    }))
);

export default useNavbarStore;
