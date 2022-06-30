import React, { ReactElement, useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import AngryBirdsToolBox from '../Components/AngryBirds/config/AngryBirdsToolbox';
import AngryBirdsCanvas from '../Components/AngryBirds/AngryBirdsCanvas';
import useGameStore from '../Store/gameStore';
import AngryBirdsLevels from '../Components/AngryBirds/config/AngryBirdsLevels';
import AngryBirdsGameAssets from '../Components/AngryBirds/config/AngryBirdsGameAssets';
import shallow from 'zustand/shallow';
import AngryBirdsGame, {
    AngryBirdsGameType,
} from '../Components/AngryBirds/config/AngryBirdsGame';
import GameState from '../types/GameState';

type Props = {};

const AngryBirds = (props: Props) => {
    const code = useRef<string>('');
    const [ele, setEle] = useState<ReactElement | ReactElement[]>(<div />);

    const {
        clearCanvas,
        game,
        getCode,
        loading,
        reset,
        run,
        setGame,
        toggleClearCanvas,
        toggleGetCode,
        toggleLoading,
        toggleReset,
        toggleRun,
        toggleWin,
        win,
    }: GameState = useGameStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        const newGame: AngryBirdsGameType = new AngryBirdsGame(
            AngryBirdsLevels,
            AngryBirdsGameAssets,
            AngryBirdsCanvas
        );
        setEle(newGame.initMaze());
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (getCode) {
            console.log('works');
            game?.addInstructions(6, code.current);
            setGame(game);
            toggleGetCode();
            toggleRun();
        }
    }, [getCode]);

    return (
        <div className='h-screen w-screen'>
            <div className='flex justify-between h-full w-full'>
                <div id='angry_birds_editor' className='h-full w-4/6'>
                    <Editor
                        toolBox={AngryBirdsToolBox}
                        className='h-full w-full'
                    />
                </div>
                <div className='w-2/6 h-full border-r-2 border-slate-500'>
                    <div id='canvas_container' className='w-[400px] h-[400px]'>
                        {loading ? 'loading' : ele}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AngryBirds;
