import CustomCategory from '../Editor/CustomCategory';
import '../Editor/Custom_Blocks_Def';
import '../Editor/Custom_Blocks_Gen';
import '../Editor/Editor.css';
import React, { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import useAngryBirdStore from '../../store/angryBirdStore';
import shallow from 'zustand/shallow';
import './Styles.css';

const AngryBirdEditor = ({ code, toolbox, className }) => {
    const [xml, setXml] = useState('');
    const [workspace, setWorkspace] = useState(null);
    const initialXML = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;
    const { loading, clearCanvas, toggleClearCanvas } = useAngryBirdStore(
        (state) => ({
            loading: state.loading,
            clearCanvas: state.clearCanvas,
            toggleClearCanvas: state.toggleClearCanvas,
        }),
        shallow
    );

    useEffect(() => {
        if (clearCanvas) {
            workspace.clear();
            toggleClearCanvas();
        }
    }, [clearCanvas]);

    function workspaceDidChange(workspace) {
        const co = Blockly.JavaScript.workspaceToCode(workspace);
        setWorkspace(workspace);
        code.current = co;
    }
    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolbox}
                initialXml={initialXML}
                workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 3,
                        colour: '#ccc',
                        snap: true,
                    },
                    renderer: 'zelos',
                }}
                onWorkspaceChange={workspaceDidChange}
                onXmlChange={setXml}
                className={className}
            />
        </>
    );
};

export default AngryBirdEditor;
