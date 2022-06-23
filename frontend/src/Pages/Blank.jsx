import React, { useEffect, useRef, useState } from 'react';
import Editor from '../Components/Editor/Editor';
import MenuBar from '../Components/MenuBar/MenuBar';
import toolbox from '../Toolbox/toolbox';
import axios from '../utils/axios';
import { useParams } from 'react-router-dom';
import useMenuBarStore from '../store/menuBarStore';
import useAuthStore from '../store/authStore';

const Blank = () => {
    const code = useRef(null);
    const [run, setRun] = useState(false);
    const [modal, setModal] = useState(false);
    const [resetCanvas, setResetCanvas] = useState(false);
    // const [save, setSave] = useState(false);
    const [initxml, setXml] = useState('');
    const [readOnly, setReadOnly] = useState(false);
    const params = useParams();

    const { share, changeShare, save, saveCode } = useMenuBarStore((state) => ({
        share: state.share,
        save: state.save,
        changeShare: state.changeShare,
        saveCode: state.saveCode,
    }));

    const { user } = useAuthStore((state) => ({
        user: state.user,
    }));

    useEffect(() => {
        const getProject = async () => {
            try {
                const res = await axios.post('/getProject', {
                    id: params.id,
                });
                setReadOnly(res.data.authorId != user.id);
                setXml(res.data.value);
            } catch (e) {
                console.log(e);
            }
        };
        getProject();
    }, []);

    useEffect(() => {
        if (share) {
            const url = `http://localhost:3000/game/${params.id}`;
            navigator.clipboard.writeText(url);
            alert('copied to clipboard');
            changeShare(false);
        }
    }, [share]);
    const toggleModal = () => {
        setModal(!modal);
        console.log(modal);
    };
    const handleRun = () => {
        console.log(code);
        setRun(true);
    };
    return initxml ? (
        <div className='h-full'>
            <MenuBar
                run={true}
                handleRun={handleRun}
                toggleModal={toggleModal}
            />
            <div className='flex'>
                <Editor
                    className='h-screen w-full'
                    code={code}
                    resetCanvas={resetCanvas}
                    toolbox={toolbox}
                    save={save}
                    initialXML={initxml}
                    readOnly={readOnly}
                />
            </div>
        </div>
    ) : (
        ''
    );
};

export default Blank;
