import React, { useEffect, useRef, useState } from 'react';
import shallow from 'zustand/shallow';
import useVMStore from '../../Store/vmStore';
import SpriteType from '../../types/SpriteType';
import VMState from '../../types/VMState';
import AddSpriteMenu from './AddSpriteMenu';

type Props = {};

const CostumeEditor = (props: Props) => {
    const renderOnce = useRef<boolean>(false);
    const [sprites, setSprites] = useState<SpriteType[]>(
        new Array<SpriteType>()
    );
    const { vm }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        setSprites(vm.sprites);
    }, []);

    return (
        <div className='h-full w-ful'>
            <div className='w-40 2xl:w-52 bg-wiingy-white-500 h-full '>
                <div className='w-full flex flex-col items-center justify-between min-h-max'>
                    {sprites.map((sprite: SpriteType) => {
                        return (
                            <div
                                key={sprite.spriteID}
                                className='w-1/2 my-4 flex flex-col items-center justify-between '>
                                <img
                                    className='w-16 2xl:w-24 object-fit mb-4'
                                    src={`assets/${
                                        sprite.costumes[sprite.currentCostume]
                                            .md5ext
                                    }`}
                                />
                                <h1>{sprite.name}</h1>
                            </div>
                        );
                    })}
                </div>
                <AddSpriteMenu />
            </div>
        </div>
    );
};

export default CostumeEditor;
