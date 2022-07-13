import React from 'react';
import shallow from 'zustand/shallow';
import useNavbarStore from '../../../Store/navbarStore';
import useVMStore from '../../../Store/vmStore';
import CostumeType from '../../../types/CostumeType';
import { json_backdrop } from '../../../types/JSONTypes';
import NavbarState from '../../../types/NavbarState';
import VMState from '../../../types/VMState';
import JSONToAsset from '../../../utils/JSONToAsset';

type Props = {
    json: string;
    toggleModal: () => void;
};

const BackdropModalMenuItem = ({ json, toggleModal }: Props) => {
    const backdrop: json_backdrop = JSON.parse(json);
    const { vm, setVm, toggleReset }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const { setScreen }: NavbarState = useNavbarStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const handleClick = () => {
        const newBackdrop: CostumeType = JSONToAsset(backdrop);
        vm.addBackdrop(newBackdrop);
        setVm(vm);
        toggleReset();
        toggleModal();
        setScreen('editor');
    };
    return (
        <div
            onClick={handleClick}
            className='h-36 w-32 2xl:h-48 2xl:w-48 bg-white flex flex-col items-center justify-between py-2 rounded-md outline outline-2 outline-sky-300 hover:outline-4 hover:outline-blue-400'>
            <img src={`assets/${backdrop.md5ext}`} />
            <h1>{backdrop.name}</h1>
        </div>
    );
};

export default BackdropModalMenuItem;
