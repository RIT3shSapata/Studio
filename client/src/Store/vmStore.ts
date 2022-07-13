import create from 'zustand';
import { devtools } from 'zustand/middleware';
import VM from '../Virtual Machine/VM';
import VMState from '../types/VMState';

const useVMStore = create<VMState>()(
    devtools((set) => ({
        execute: false,
        getCode: false,
        update: false,
        sync: false,
        event: false,
        reset: false,
        vm: new VM(),
        workspace: null,
        xml: `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`,
        toggleExecute: () => {
            set((state) => ({
                execute: !state.execute,
            }));
        },
        toggleSync: () => {
            set((state) => ({
                sync: !state.sync,
            }));
        },
        toggleGetCode: () => {
            set((state) => ({
                getCode: !state.getCode,
            }));
        },
        toggleEvent: () => {
            set((state) => ({
                event: !state.event,
            }));
        },
        toggleReset: () => {
            set((state) => ({
                reset: !state.reset,
            }));
        },
        setVm: (newVM) => {
            set({ vm: newVM });
        },
        setUpdate: (newUpdate) => {
            set({ update: newUpdate });
        },
        setXML: (newXml) => {
            set({ xml: newXml });
        },
        setWorkspace: (newWorkspace) => {
            set({ workspace: newWorkspace });
        },
    }))
);

export default useVMStore;
