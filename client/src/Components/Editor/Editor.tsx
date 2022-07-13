import React, { Ref, RefObject, useEffect, useState } from 'react';
import { BlocklyWorkspace } from 'react-blockly';
import { ToolBox, INITIAL_XML } from '../../types/ToolBoxTypes';
import Blockly, { Block, WorkspaceSvg } from 'blockly';
import './CustomBlocks/Custom_Blocks_Def';
import './CustomBlocks/Custom_Blocks_Gen';
import './CustomBlocks/CustomCategory.ts';
// import './studio_blocks_def';
// import './studio_blocks_gen';
import DefineEvents from './blocks/definitions';
import './blocks/generators';
import './Editor.css';
import useGameStore from '../../Store/gameStore';
import shallow from 'zustand/shallow';
import GameState from '../../types/GameState';
import VMState from '../../types/VMState';
import useVMStore from '../../Store/vmStore';
import SpriteToFieldDrop from '../../utils/SpriteToFieldDrop';

type Props = {
    code: any;
    toolBox: ToolBox;
    className: string;
};

const Editor = ({ code, toolBox, className }: Props) => {
    const { clearCanvas, toggleClearCanvas }: GameState = useGameStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    const {
        update,
        setUpdate,
        xml,
        setXML,
        vm,
        setVm,
        workspace,
        setWorkspace,
    }: VMState = useVMStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    useEffect(() => {
        DefineEvents(SpriteToFieldDrop(vm.sprites));
    }, [vm]);

    useEffect(() => {
        if (update && workspace) {
            const xmlElement = Blockly.Xml.textToDom(xml);
            workspace.clear();
            Blockly.Xml.domToWorkspace(xmlElement, workspace);
            setUpdate(false);
        }
    }, [update]);

    useEffect(() => {
        if (clearCanvas) {
            workspace?.clear();
            toggleClearCanvas();
        }
    }, [clearCanvas]);

    const handleWorkspaceChange = (workspace: WorkspaceSvg) => {
        const co: string = Blockly.JavaScript.workspaceToCode(workspace);
        setWorkspace(workspace);
        if (workspace.isDragging()) {
            const topBlocks: Block[] = workspace.getTopBlocks(true);
            topBlocks.forEach((block: Block) => {
                if (block.type === 'keyboard_event') {
                    vm.addKeyListner(block.getFieldValue('key'));
                    setVm(vm);
                }
            });
        }
        code.current = co;
    };
    return (
        <>
            <BlocklyWorkspace
                toolboxConfiguration={toolBox}
                initialXml={xml}
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
