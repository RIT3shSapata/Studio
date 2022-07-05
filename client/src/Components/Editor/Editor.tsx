import React, { Ref, RefObject, useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { ToolBox, INITIAL_XML } from '../../types/ToolBoxTypes';
import Blockly, { WorkspaceSvg } from 'blockly';
import './CustomBlocks/Custom_Blocks_Def';
import './CustomBlocks/Custom_Blocks_Gen';
import './CustomBlocks/CustomCategory.ts';
import './studio_blocks_def';
import './studio_blocks_gen';
import './Editor.css';
import useGameStore from '../../Store/gameStore';
import shallow from 'zustand/shallow';
import GameState from '../../types/GameState';

type Props = {
    code: any;
    toolBox: ToolBox;
    className: string;
};

const Editor = ({ code, toolBox, className }: Props) => {
    const [xml, setXML] = useState<string>('');
    const [workspace, setWorkspace] = useState<WorkspaceSvg | null>(null);

    const { clearCanvas, toggleClearCanvas }: GameState = useGameStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        if (clearCanvas) {
            workspace?.clear();
            toggleClearCanvas();
        }
    }, [clearCanvas]);

    const handleWorkspaceChange = (workspace: WorkspaceSvg) => {
        const co: string = Blockly.JavaScript.workspaceToCode(workspace);
        setWorkspace(workspace);
        code.current = co;
    };
    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolBox}
                initialXml={INITIAL_XML}
                workspaceConfiguration={{
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
