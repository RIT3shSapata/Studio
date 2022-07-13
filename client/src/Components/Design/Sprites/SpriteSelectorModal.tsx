import React from 'react';
import FullScreenModal from '../../Modal/FullScreenModal';
import spriteLibrary from '../../../Virtual Machine/config/sprites.json';
import SpriteModalMenuItem from './SpriteModalMenuItem';

type Props = {
    toggleModal: () => void;
};

const SpriteSelectorModal = ({ toggleModal }: Props) => {
    return (
        <FullScreenModal toggleModal={toggleModal} heading='Choose a Sprite'>
            <div className='grid grid-cols-8 m-5 gap-4 2xl:gap-5'>
                {spriteLibrary.map((sprite, idx) => {
                    return (
                        <SpriteModalMenuItem
                            json={JSON.stringify(sprite)}
                            toggleModal={toggleModal}
                            key={idx}
                        />
                    );
                })}
            </div>
        </FullScreenModal>
    );
};

export default SpriteSelectorModal;
