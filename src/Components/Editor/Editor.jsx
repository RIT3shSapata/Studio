import './CutomBlocks';
import './Custom_Blocks_Def';
import './Custom_Blocks_Gen';
import './Editor.css';
import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';

const Editor = ({ code, ...props }) => {
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');

    const toolboxCategories = {
        kind: 'categoryToolbox',
        contents: [
            {
                kind: 'category',
                name: 'maze',
                color: '120',
                expanded: 'true',
                contents: [
                    {
                        kind: 'block',
                        type: 'start_block',
                    },
                    {
                        kind: 'block',
                        type: 'up_block',
                    },
                    {
                        kind: 'block',
                        type: 'down_block',
                    },
                    {
                        kind: 'block',
                        type: 'right_block',
                    },
                    {
                        kind: 'block',
                        type: 'left_block',
                    },
                ],
            },
        ],
    };
    function workspaceDidChange(workspace) {
        const co = Blockly.JavaScript.workspaceToCode(workspace);
        // setJavascriptCode(code);
        code.current = co;
    }

    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolboxCategories}
                initialXml=""
                // className="fill-height"
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
                {...props}
            />
        </>
    );
};
export default Editor;
