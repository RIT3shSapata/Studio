import React, { useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { ToolBox, INITIAL_XML } from '../../types/ToolBoxTypes';
import Blockly, { WorkspaceSvg } from 'blockly';
import './CustomBlocks/Custom_Blocks_Def';
import './CustomBlocks/Custom_Blocks_Gen';
import './CustomBlocks/CustomCategory.ts';
import './Editor.css';

type Props = {
    toolBox: ToolBox;
    className: string;
};

const Editor = ({ toolBox, className }: Props) => {
    const [xml, setXML] = useState<string>('');
    const [workspace, setWorkspace] = useState<WorkspaceSvg | null>(null);

    const handleWorkspaceChange = (workspace: WorkspaceSvg) => {
        const co: string = Blockly.JavaScript.workspaceToCode(workspace);
        setWorkspace(workspace);
    };
    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolBox}
                initialXml={INITIAL_XML}
                workspaceConfiguration={{
                    grid: {
                        spacing: 20,
                        length: 3,
                        colour: '#ccc',
                        snap: true,
                    },
                    renderer: 'zelos',
                }}
                onWorkspaceChange={handleWorkspaceChange}
                onXmlChange={setXML}
                className={className}
            />
        </>
    );
};

export default Editor;
