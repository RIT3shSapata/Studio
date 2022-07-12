import React from 'react';
import FullScreenModal from '../Modal/FullScreenModal';

type Props = {
    toggleModal: () => void;
};

const SpriteSelectorModal = ({ toggleModal }: Props) => {
    return (
        <FullScreenModal
            toggleModal={toggleModal}
            heading='Choose a Sprite'></FullScreenModal>
    );
};

export default SpriteSelectorModal;
