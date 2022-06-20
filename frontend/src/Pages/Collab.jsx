import React, { useState, useEffect, useRef } from 'react';
import CollabEditor from '../Components/CollabEditor/CollabEditor';
import io from 'socket.io-client';

const PROJECT_ID = 1;
const socket = io('ws://localhost:5000', {
    transports: ['websocket'],
});

const Collab = () => {
    const [xml, setXml] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        socket.on('CODE_UPDATED', (xml) => {
            setXml(xml);
            setUpdate(true);
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
    }, []);

    const handleUpdate = () => {
        socket.emit('CODE_CHANGED', { PROJECT_ID, xml });
    };
    return (
        <div className="h-screen w-screen flex ">
            <CollabEditor
                setXML={setXml}
                className="h-full w-10/12"
                update={update}
                setUpdate={setUpdate}
                xml={xml}
            />
            <button
                onClick={handleUpdate}
                className="bg-blue-600 text-white px-8 py-5 h-20 rounded-lg hover:bg-blue-400">
                Update
            </button>
            {/* <form
                className="w-1/2 m-24"
                onSubmit={(e) => {
                    e.preventDefault();
                }}>
                <textarea
                    className="w-full h-full  border-4 border-slate-700"
                    value={xml}
                    onChange={(e) => setXml(e.target.value)}
                />
                <button
                    onClick={() => {
                        setUpdate(true);
                    }}
                    className="bg-blue-600 text-white px-8 py-5 rounded-lg hover:bg-blue-400">
                    Generate
                </button>
            </form> */}
        </div>
    );
};

export default Collab;
