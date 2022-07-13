import React from 'react';
import FullScreenModal from '../../Modal/FullScreenModal';
import backdropLibrary from '../../../Virtual Machine/config/backdrops.json';
import BackdropModalMenuItem from './BackdropModalMenuItem';

type Props = {
    toggleModal: () => void;
};

const BackdropSelectionModal = ({ toggleModal }: Props) => {
    return (
        <FullScreenModal toggleModal={toggleModal} heading='Choose a Backdrop'>
            <div className='grid grid-cols-8 m-5 gap-4 2xl:gap-5'>
                {backdropLibrary.map((backdrop, idx) => {
                    return (
                        <BackdropModalMenuItem
                            json={JSON.stringify(backdrop)}
                            toggleModal={toggleModal}
                            key={idx}
                        />
                    );
                })}
            </div>
        </FullScreenModal>
    );
};

export default BackdropSelectionModal;
