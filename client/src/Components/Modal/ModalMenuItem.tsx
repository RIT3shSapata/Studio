import React, { useState } from 'react';

type Props = {
    sprite: any;
};

const ModalMenuItem = ({ sprite }: Props) => {
    const [idx, setIdx] = useState(0);
    const handleHover = () => {
        setIdx((idx + 1) % sprite.costumes.length);
    };
    return (
        <div
            onMouseOver={handleHover}
            className='h-36 w-32 2xl:h-48 2xl:w-48 bg-white flex flex-col items-center justify-between py-2 rounded-md outline outline-2 outline-sky-300 hover:outline-4 hover:outline-blue-400'>
            <img
                className='h-28 w-24'
                src={'assets/' + sprite.costumes[idx].md5ext}
            />
            <h1>{sprite.name}</h1>
        </div>
    );
};

export default ModalMenuItem;
