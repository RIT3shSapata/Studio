import React, { useEffect, useState } from 'react';
import './Custom_Blocks_Def';
import './Custom_Blocks_Gen';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import shallow from 'zustand/shallow';
import useHarvesterGameStore from '../../../store/harvesterGameStore';

const HarvesterGameEditor = ({
    className,
    code,
    toolbox,
    xml,
    setXML,
    update,
    setUpdate,
}) => {
    // const [xml, setXml] = useState('');
    const [workspace, setWorkspace] = useState(null);
    const initialXML = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;

    const { loading, clearCanvas, toggleClearCanvas } = useHarvesterGameStore(
        (state) => ({
            loading: state.loading,
            clearCanvas: state.clearCanvas,
            toggleClearCanvas: state.toggleClearCanvas,
        }),
        shallow
    );

    useEffect(() => {
        if (update) {
            console.log('update');
            const xmlElement = Blockly.Xml.textToDom(xml);
            workspace.clear();
            Blockly.Xml.domToWorkspace(xmlElement, workspace);
            setUpdate(false);
        }
    }, [update]);

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
                onXmlChange={setXML}
                className={className}
            />
        </>
    );
};

export default HarvesterGameEditor;
