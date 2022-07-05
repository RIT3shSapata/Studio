import VMType from './VMType';

export default interface VMState {
    execute: boolean;
    getCode: boolean;
    vm: VMType;
    toggleExecute: () => void;
    toggleGetCode: () => void;
    setVm(vm: VMType): void;
}
