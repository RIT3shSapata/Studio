import { useEffect, useRef, useState } from 'react';
import Blockly from 'blockly';
import CustomCategory from './CustomCategory';
import './BlocklyEditor.css';
import customBlocks from './move';

const BlocklyEditor = () => {
    const blocklyDiv = useRef(null);
    const renderOnce = useRef(false);

    useEffect(() => {
        if (blocklyDiv.current && !renderOnce.current) {
            const toolboxConf1 = {
                kind: 'categoryToolbox',
                contents: [
                    {
                        kind: 'category',
                        name: 'Control',
                        colour: '#4a148c',
                        contents: [
                            {
                                kind: 'block',
                                type: 'controls_if',
                            },
                        ],
                    },
                    {
                        kind: 'category',
                        name: 'Logic',
                        colour: '#01579b',
                        contents: [
                            {
                                kind: 'block',
                                type: 'logic_compare',
                            },
                            {
                                kind: 'block',
                                type: 'logic_operation',
                            },
                            {
                                kind: 'block',
                                type: 'logic_boolean',
                            },
                        ],
                    },
                ],
            };
            var toolboxConf = {
                kind: 'flyoutToolbox',
                contents: [
                    {
                        kind: 'block',
                        type: 'controls_if',
                    },
                    {
                        kind: 'block',
                        type: 'controls_repeat_ext',
                    },
                    {
                        kind: 'block',
                        type: 'logic_compare',
                    },
                    {
                        kind: 'block',
                        type: 'math_number',
                    },
                    {
                        kind: 'block',
                        type: 'math_arithmetic',
                    },
                    {
                        kind: 'block',
                        type: 'text',
                    },
                    {
                        kind: 'block',
                        type: 'text_print',
                    },
                ],
            };
            const customToolBox = {
                kind: 'categoryToolbox',
                contents: [
                    {
                        kind: 'category',
                        name: 'Logic',
                        colour: '#01579b',
                        contents: [
                            {
                                kind: 'block',
                                type: 'logic_compare',
                            },
                            {
                                kind: 'block',
                                type: 'logic_operation',
                            },
                            {
                                kind: 'block',
                                type: 'logic_boolean',
                            },
                        ],
                    },
                    {
                        kind: 'category',
                        name: 'Move',
                        colour: '#4a148c',
                        contents: customBlocks,
                    },
                ],
            };
            const darkTheme = Blockly.Theme.defineTheme('dark', {
                base: Blockly.Themes.Classic,
                componentStyles: {
                    workspaceBackgroundColour: '#1e1e1e',
                    toolboxBackgroundColour: 'blackBackground',
                    toolboxForegroundColour: '#fff',
                    flyoutBackgroundColour: 'red',
                    flyoutForegroundColour: '#ccc',
                    flyoutOpacity: 1,
                    scrollbarColour: '#797979',
                    insertionMarkerColour: '#fff',
                    insertionMarkerOpacity: 0.3,
                    scrollbarOpacity: 0.4,
                    cursorColour: '#d0d0d0',
                    blackBackground: '#333',
                },
            });
            const workspace = Blockly.inject(blocklyDiv.current, {
                toolbox: customToolBox,
                readOnly: false,
                trashcan: true,
                // media: 'media/',
                move: {
                    scrollbars: true,
                    drag: true,
                    wheel: true,
                },
                // theme: darkTheme,
                renderer: 'zelos',
            });
            renderOnce.current = true;
            Blockly.registry.register(
                Blockly.registry.Type.TOOLBOX_ITEM,
                Blockly.ToolboxCategory.registrationName,
                CustomCategory,
                true
            );
        }
    }, []);

    return (
        <div>
            <h1>Blockly Editor</h1>
            <div
                style={{ height: '900px', width: '1500px' }}
                ref={blocklyDiv}
            />
        </div>
    );
};

export default BlocklyEditor;
