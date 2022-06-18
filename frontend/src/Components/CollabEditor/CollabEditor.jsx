import React, { useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import MazeToolbox from '../../Toolbox/MazeToolbox';
import Blockly from 'blockly';

const CollabEditor = ({ update, setUpdate, xml, setXML, ...props }) => {
    const [workspace, setWorkspace] = useState(null);
    useEffect(() => {
        if (update) {
            console.log('update');
            const xmlElement = Blockly.Xml.textToDom(xml);
            workspace.clear();
            Blockly.Xml.domToWorkspace(xmlElement, workspace);
            setUpdate(false);
        }
    }, [update]);
    const onWorkspaceChange = (workspace) => {
        setWorkspace(workspace);
    };

    return (
        <BlocklyWorkspace
            toolboxConfiguration={MazeToolbox}
            workspaceConfiguration={{
                grid: {
                    spacing: 20,
                    length: 3,
                    colour: '#ccc',
                    snap: true,
                },
                renderer: 'zelos',
            }}
            onWorkspaceChange={onWorkspaceChange}
            onXmlChange={setXML}
            {...props}
        />
    );
};

export default CollabEditor;
