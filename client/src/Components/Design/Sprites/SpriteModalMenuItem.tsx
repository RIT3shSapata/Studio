import React, { useState } from 'react';
import shallow from 'zustand/shallow';
import useNavbarStore from '../../../Store/navbarStore';
import useVMStore from '../../../Store/vmStore';
import { json_sprite_library } from '../../../types/JSONTypes';
import NavbarState from '../../../types/NavbarState';
import SpriteType from '../../../types/SpriteType';
import VMState from '../../../types/VMState';
import JSONtoSprite from '../../../utils/JSONToSprite';

type Props = {
    json: string;
    toggleModal: () => void;
};

const SpriteModalMenuItem = ({ json, toggleModal }: Props) => {
    const [idx, setIdx] = useState(0);
    const sprite: json_sprite_library = JSON.parse(json);
    const { vm, setVm, toggleReset }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    const { setScreen }: NavbarState = useNavbarStore(
        (state) => ({ ...state }),
        shallow
    );
    const handleHover = () => {
        setIdx((idx + 1) % sprite.costumes.length);
    };
    const handleClick = () => {
        // console.log(vm.sprites.length);
        const newSprite: SpriteType = JSONtoSprite(sprite, vm.sprites.length);
        vm.addSprite(newSprite);
        setVm(vm);
        toggleReset();
        toggleModal();
        setScreen('editor');
    };
    return (
        <div
            onMouseOver={handleHover}
            onClick={handleClick}
            className='h-36 w-32 2xl:h-48 2xl:w-48 bg-white flex flex-col items-center justify-between py-2 rounded-md outline outline-2 outline-sky-300 hover:outline-4 hover:outline-blue-400'>
            <img
                className='h-28 w-24'
                src={'assets/' + sprite.costumes[idx].md5ext}
            />
            <h1>{sprite.name}</h1>
        </div>
    );
};

export default SpriteModalMenuItem;
