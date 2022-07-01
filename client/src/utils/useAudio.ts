import React, { useEffect, useState } from 'react';

type Props = {
    url: string;
};

const useAudio = ({ url }: Props) => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        setPlaying(!playing);
        return new Promise((resolve, reject) => {
            audio.addEventListener('ended', () => resolve(() => {}));
        });
    };

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    }, [playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => {
            setPlaying(false);
        });
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return { playing, toggle };
};

export default useAudio;
