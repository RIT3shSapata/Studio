import Blockly, { Block } from 'blockly';

Blockly.JavaScript['backdrop_select'] = function (block: Block) {
    var dropdown_name = block.getFieldValue('backdrop');
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'change_backdrop,' + dropdown_name + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['next_backdrop'] = function (block: Block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'change_backdrop,next;';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};
