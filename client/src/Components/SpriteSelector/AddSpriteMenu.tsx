import React, { useState } from 'react';
import shallow from 'zustand/shallow';
import useModalStore from '../../Store/modalStore';
import ModalState from '../../types/ModalState';
import FullScreenModal from '../Modal/FullScreenModal';

type Props = {};

const AddSpriteMenu = ({}: Props) => {
    const { toggelSpriteModal }: ModalState = useModalStore(
        (state) => ({
            ...state,
        }),
        shallow
    );
    return (
        <>
            <div
                onClick={toggelSpriteModal}
                className='bg-blue-500 rounded-full w-12 h-12 2xl:w-16 2xl:h-16 flex justify-center items-center absolute bottom-8 left-14 2xl:left-20 hover:bg-emerald-500 ring-4 ring-blue-400/50 hover:ring-8'>
                <svg
                    className='w-5 h-5 2xl:scale-150 fill-white'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M18.5 2.5h.75c.4142136 0 .75.3357864.75.75s-.3357864.75-.75.75h-.75v.75c0 .4142136-.3357864.75-.75.75S17 5.1642136 17 4.75V4h-.75c-.4142136 0-.75-.3357864-.75-.75s.3357864-.75.75-.75H17v-.75c0-.4142136.3357864-.75.75-.75s.75.3357864.75.75v.75Zm-2.5785689 9.8870691C15.9214311 15.6404905 13.2729235 17 10.0195022 17c-3.2521842 0-5.8870843-1.3595095-5.8870843-4.6129309 0-.8040776.1348376-1.4844508.3958535-2.0534903l-.0989634-4.700761c-.0123704-.5195577.5690395-.816448.9896339-.5071873l2.5111959 1.8926748c.5814099-.3092606 1.2988944-.4453353 2.0893644-.4453353.7929442 0 1.5227991.1360747 2.104209.4453353l2.5111959-1.8926748c.408224-.3092606.9896339-.0123704.9896339.5071873l-.0989634 4.700761c.2597789.5690395.3958535 1.2494127.3958535 2.0534903Zm-3.4152264 2.0283783c.174423-.1843193.1484451-.4824465-.0482446-.6556324-.1855564-.1608155-.4836836-.1360747-.6556325.0630891-.1373117.1595785-.3352384.2461715-.5455356.2461715-.3958536 0-.729855-.3216311-.729855-.729855v-.6803733c.7174845-.1979268 1.2617832-.8028405 1.2617832-1.1999311 0-.4948169-.7793367-.4948169-1.7194889-.4948169-.9512855 0-1.7182517 0-1.7182517.4948169 0 .3970906.5195577 1.0020043 1.2481757 1.1875607v.6927437c0 .4082239-.320394.729855-.7174846.729855-.2214306 0-.4205944-.086593-.556669-.2461715-.1608155-.1991638-.4577057-.2239046-.6556324-.0630891-.1966898.1731859-.2102972.4713131-.0482447.6556324.3092606.3711127.7657292.5814099 1.2605461.5814099.4577057 0 .8783-.1966897 1.1875606-.5059503.2981272.3092606.7174846.5059503 1.1875607.5059503.4836835 0 .9401521-.2102972 1.2494127-.5814099Z' />
                </svg>
            </div>
        </>
    );
};

export default AddSpriteMenu;
