import React from 'react';
import Editor from '../Components/Editor/Editor';
import AngryBirdsToolBox from '../Components/AngryBirds/config/AngryBirdsToolbox';

type Props = {};

const AngryBirds = (props: Props) => {
    return (
        <div className='h-screen w-screen'>
            <div id='angry_birds_editor' className='h-full w-full'>
                <Editor toolBox={AngryBirdsToolBox} className='h-full w-full' />
            </div>
        </div>
    );
};

export default AngryBirds;
