import React, { useEffect, useRef, useState } from 'react';
import HarvesterGameEditor from '../Components/HarvesterGame/Editor/HarvesterGameEditor';
import HarvesterGameToolbox from '../Components/HarvesterGame/Editor/HarvesterGameToolbox';
import useHarvesterGameStore from '../store/harvesterGameStore';
import shallow from 'zustand/shallow';
import GameLevels from '../Components/HarvesterGame/GameLevels';
import useGameStore from '../store/gameStore';
import Game from '../Components/HarvesterGame/Objects/Game';
import Modal from '../Components/Modal/Modal';
import io from 'socket.io-client';

const PROJECT_ID = 1;

const HarvesterGame = () => {
    const code = useRef(null);
    const [ele, setEle] = useState(null);

    //collab states
    const [xml, setXml] = useState('');
    const [update, setUpdate] = useState(false);

    const { game, setGame } = useGameStore(
        (state) => ({ game: state.game, setGame: state.setGame }),
        shallow
    );
    const {
        run,
        toggleRun,
        getCode,
        toggleGetCode,
        win,
        toggleWin,
        toggleClearCanvas,
        loading,
        toggleLoading,
        reset,
        toggleReset,
    } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
            getCode: state.getCode,
            toggleGetCode: state.toggleGetCode,
            win: state.win,
            toggleWin: state.toggleWin,
            toggleClearCanvas: state.toggleClearCanvas,
            loading: state.loading,
            toggleLoading: state.toggleLoading,
            reset: state.reset,
            toggleReset: state.toggleReset,
        }),
        shallow
    );
    const socket = io('ws://localhost:5000', {
        transports: ['websocket'],
    });
    useEffect(() => {
        const newGame = new Game();
        newGame.addMaze(GameLevels);
        setEle(newGame.initMaze());
        setGame(newGame);
    }, []);

    useEffect(() => {
        if (game) {
            socket.on('CODE_UPDATED', (xml) => {
                setXml(xml);
                setUpdate(true);
            });
            socket.on('RUN_CODE', (code_) => {
                game.addInstructions(2, code_);
                console.log(game);
                setGame(game);
                toggleRun();
            });
            socket.on('connect_error', (err) => {
                console.log(`connect_error due to ${err.message}`);
            });

            socket.on('connect', () => {
                socket.emit('CONNECT_ROOM', PROJECT_ID);
            });

            socket.on('ROOM_CONNECTED', (data) => {
                console.log(data);
            });
        }
    }, [game]);

    useEffect(() => {
        if (getCode) {
            game.addInstructions(2, code.current);
            setGame(game);
            toggleGetCode();
            toggleRun();
        }
    }, [getCode]);

    const nextLevel = () => {
        toggleLoading();
        toggleClearCanvas();
        // game.clearLevel();
        game.nextLevel();
        setEle(game.initMaze());
        setGame(game);
        setTimeout(() => {
            toggleLoading();
        }, 500);
        toggleWin();
    };

    const handleReset = () => {
        toggleLoading();
        // game.clearLevel();
        game.reset();
        setGame(game);
        setEle(game.initMaze());
        setTimeout(() => {
            toggleReset();
            toggleLoading();
        }, 500);
    };

    const handleUpdate = () => {
        socket.emit('CODE_CHANGED', { PROJECT_ID, xml });
    };

    const handleRun = () => {
        const co = code.current;
        socket.emit('RUN', { PROJECT_ID, code_: co });
    };

    return (
        <div className='h-screen w-screen flex justify-between'>
            <div id='editor' className='w-4/6 h-full'>
                <HarvesterGameEditor
                    code={code}
                    toolbox={HarvesterGameToolbox}
                    className='h-full w-full'
                    setXML={setXml}
                    xml={xml}
                    update={update}
                    setUpdate={setUpdate}
                />
            </div>
            <div className='w-2/6 h-full border-r-2 border-slate-500'>
                <div id='canvas_container' width='400' height='400'>
                    {loading ? 'loading' : ele}
                </div>
                <div>
                    {reset ? (
                        <button className='btn-primary' onClick={handleReset}>
                            Reset
                        </button>
                    ) : (
                        <button
                            className='btn-primary '
                            onClick={() => {
                                toggleGetCode();
                                handleRun();
                            }}>
                            Run
                        </button>
                    )}
                    <div>
                        <button className='btn-primary' onClick={handleUpdate}>
                            {' '}
                            update
                        </button>
                    </div>
                </div>
            </div>
            {win ? <Modal toggleModal={toggleWin} nextLevel={nextLevel} /> : ''}
        </div>
    );
};

export default HarvesterGame;
