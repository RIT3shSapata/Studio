import React, { useEffect, useRef } from 'react';
import HarvesterGameEditor from '../Components/HarvesterGame/Editor/HarvesterGameEditor';
import HarvesterGameToolbox from '../Components/HarvesterGame/Editor/HarvesterGameToolbox';
import useHarvesterGameStore from '../store/harvesterGameStore';
import shallow from 'zustand/shallow';

const HarvesterGame = () => {
    const code = useRef(null);
    const { run, toggleRun } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
        }),
        shallow
    );
    useEffect(() => {
        if (run) {
            console.log(code.current);
        }
    }, [run]);

    return (
        <div className='h-screen w-screen'>
            <h1>Harvester Game</h1>
            <button className='btn-primary' onClick={toggleRun}>
                {' '}
                Run
            </button>
            <HarvesterGameEditor
                code={code}
                toolbox={HarvesterGameToolbox}
                className='h-full w-full'
            />
        </div>
    );
};

export default HarvesterGame;
