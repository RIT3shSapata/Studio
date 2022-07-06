import create from 'zustand';
import { devtools } from 'zustand/middleware';
import VM from '../Virtual Machine/VM';
import VMState from '../types/VMState';

const useVMStore = create<VMState>()(
    devtools((set) => ({
        execute: false,
        getCode: false,
        vm: new VM(),
        toggleExecute: () => {
            set((state) => ({
                execute: !state.execute,
            }));
        },
        toggleGetCode: () => {
            set((state) => ({
                getCode: !state.getCode,
            }));
        },
        setVm: (newVM) => {
            set({ vm: newVM });
        },
    }))
);

export default useVMStore;
