import './CutomBlocks';
import './Custom_Blocks_Def';
import './Custom_Blocks_Gen';
import './Editor.css';
import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';

const Editor = () => {
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');

    const toolboxCategories = {
        kind: 'categoryToolbox',
        contents: [
            {
                kind: 'category',
                name: 'maze',
                color: '#6F4F28',
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
            {
                kind: 'category',
                name: 'Logic',
                colour: '#5C81A6',
                contents: [
                    {
                        kind: 'block',
                        type: 'controls_if',
                    },
                    {
                        kind: 'block',
                        type: 'logic_compare',
                    },
                ],
            },
            {
                kind: 'category',
                name: 'Math',
                colour: '#5CA65C',
                contents: [
                    {
                        kind: 'block',
                        type: 'math_round',
                    },
                    {
                        kind: 'block',
                        type: 'math_number',
                    },
                ],
            },
            {
                kind: 'category',
                name: 'Custom',
                colour: '#5CA699',
                contents: [
                    {
                        kind: 'block',
                        type: 'new_boundary_function',
                    },
                    {
                        kind: 'block',
                        type: 'return',
                    },
                ],
            },
        ],
    };
    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        setJavascriptCode(code);
    }

    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolboxCategories}
                initialXml=""
                className="fill-height"
                workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 3,
                        colour: '#ccc',
                        snap: true,
                    },
                }}
                onWorkspaceChange={workspaceDidChange}
                onXmlChange={setXml}
            />
            <pre id="generated-xml">{xml}</pre>
            <textarea
                id="code"
                style={{ height: '200px', width: '400px' }}
                value={javascriptCode}
                readOnly></textarea>
        </>
    );
};
export default Editor;
