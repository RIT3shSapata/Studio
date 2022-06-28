import React, { useState } from 'react';
import './Custom_Blocks_Def';
import './Custom_Blocks_Gen';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import shallow from 'zustand/shallow';
import useHarvesterGameStore from '../../../store/harvesterGameStore';

const HarvesterGameEditor = ({ className, code, toolbox }) => {
    const [xml, setXml] = useState('');
    const [workspace, setWorkspace] = useState(null);
    const initialXML = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;

    const { run, toggleRun } = useHarvesterGameStore(
        (state) => ({
            run: state.run,
            toggleRun: state.toggleRun,
        }),
        shallow
    );

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

export default HarvesterGameEditor;
