import React, { useState } from 'react';
import CollabEditor from '../Components/CollabEditor/CollabEditor';

const Collab = () => {
    const [xml, setXml] = useState('');
    const [update, setUpdate] = useState(false);
    return (
        <div className="h-screen w-screen flex ">
            <CollabEditor
                setXML={setXml}
                className="h-full w-1/2"
                update={update}
                setUpdate={setUpdate}
                xml={xml}
            />
            <form
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
                    Update
                </button>
            </form>
        </div>
    );
};

export default Collab;
