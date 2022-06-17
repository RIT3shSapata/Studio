import React, { useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import toolbox from '../Toolbox/toolbox';
import axios from '../utils/axios';
import { useParams } from 'react-router-dom';

const Blank = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const [modal, setModal] = useState(false);
    const [resetCanvas, setResetCanvas] = useState(false);
    const [save, setSave] = useState(false);
    const [initxml, setXml] = useState('');
    const params = useParams();

    console.log(params);

    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await axios.post('/getProject', {
                    id: params.id,
                });
                console.log(res.data.value);
                setXml(res.data.value);
            } catch (e) {
                console.log(e);
            }
        };
        getProject();
    });

    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    };
    const handleRun = () => {
        console.log(code);
        setRun(true);
    };
    const saveCode = () => {
        console.log('works');
        setSave(true);
    };
    return initxml ? (
        <div className="h-full">
            <MenuBar
                run={true}
                handleRun={handleRun}
                toggleModal={toggleModal}
                saveCode={saveCode}
            />
            <div className="flex">
                <Editor
                    className="h-screen w-full"
                    code={code}
                    resetCanvas={resetCanvas}
                    toolbox={toolbox}
                    save={save}
                    initialXML={initxml}
                />
            </div>
        </div>
    ) : (
        ''
    );
};

export default Blank;
