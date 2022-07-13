import VMType from './VMType';

export default interface VMState {
    execute: boolean;
    getCode: boolean;
    update: boolean;
    event: boolean;
    xml: string;
    sync: boolean;
    reset: boolean;
    vm: VMType;
    toggleExecute: () => void;
    toggleGetCode: () => void;
    toggleSync: () => void;
    toggleEvent: () => void;
    toggleReset: () => void;
    setUpdate: (newUpdate: boolean) => void;
    setVm(vm: VMType): void;
    setXML: (xml: string) => void;
}
