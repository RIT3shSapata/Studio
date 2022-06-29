import Blockly from 'blockly';
// export interface ToolBox {
//     kind: string;
//     contents: ToolboxCategory[];
// }

// interface ToolboxCategory {
//     kind: string;
//     name: string;
//     color: string;
//     expanded: string;
//     contents: Block[];
// }

// interface Block {
//     kind: string;
//     type: string;
// }

export type ToolBox = Blockly.utils.toolbox.ToolboxDefinition;
export const INITIAL_XML: string = `<xml xmlns="https://developers.google.com/blockly/xml"></xml>`;
