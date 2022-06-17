import './Custom_Blocks_Def';
import './Custom_Blocks_Gen';
import './Editor.css';
import React, { useState, useEffect } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly';
import CustomCategory from './CustomCategory';
import axios from '../../utils/axios';

const Editor = ({
    code,
    resetCanvas,
    toolbox,
    save,
    initialXML,
    readOnly,
    ...props
}) => {
    const [xml, setXml] = useState('');
    const [javascriptCode, setJavascriptCode] = useState('');
    const [workspace, setWorkspace] = useState(null);

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
        setWorkspace(workspace);
        code.current = co;
    }

    useEffect(() => {
        if (resetCanvas) {
            workspace.clear();
        }
    }, [resetCanvas]);

    useEffect(() => {
        console.log('XML');
        if (save) {
            console.log(xml);
            xml.replace('"', "'");
            const saveProject = async () => {
                try {
                    await axios.post('/addProject', {
                        name: 'test',
                        value: xml,
                        authorId: 1,
                    });
                } catch (e) {
                    console.log(e);
                }
            };
            saveProject();
        }
    }, [save]);

    useEffect(() => {
        Blockly.registry.register(
            Blockly.registry.Type.TOOLBOX_ITEM,
            Blockly.ToolboxCategory.registrationName,
            CustomCategory,
            true
        );
    }, []);

    return (
        <>
            {readOnly ? (
                <BlocklyWorkspace
                    // toolboxConfiguration={toolbox}
                    initialXml={initialXML}
                    // className="fill-height"
                    workspaceConfiguration={{
                        grid: {
                            spacing: 20,
                            length: 3,
                            colour: '#ccc',
                            snap: true,
                        },
                        renderer: 'zelos',
                        readOnly: readOnly,
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                    {...props}
                />
            ) : (
                <BlocklyWorkspace
                    toolboxConfiguration={toolbox}
                    initialXml={initialXML}
                    // className="fill-height"
                    workspaceConfiguration={{
                        grid: {
                            spacing: 20,
                            length: 3,
                            colour: '#ccc',
                            snap: true,
                        },
                        renderer: 'zelos',
                        readOnly: readOnly,
                    }}
                    onWorkspaceChange={workspaceDidChange}
                    onXmlChange={setXml}
                    {...props}
                />
            )}
        </>
    );
};
export default Editor;
