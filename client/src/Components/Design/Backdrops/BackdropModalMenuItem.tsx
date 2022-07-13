import React from 'react';
import { json_backdrop } from '../../../types/JSONTypes';

type Props = {
    json: string;
    toggleModal: () => void;
};

const BackdropModalMenuItem = ({ json, toggleModal }: Props) => {
    const backdrop: json_backdrop = JSON.parse(json);
    return (
        <div className='h-36 w-32 2xl:h-48 2xl:w-48 bg-white flex flex-col items-center justify-between py-2 rounded-md outline outline-2 outline-sky-300 hover:outline-4 hover:outline-blue-400'>
            <img src={`assets/${backdrop.md5ext}`} />
            <h1>{backdrop.name}</h1>
        </div>
    );
};

export default BackdropModalMenuItem;
