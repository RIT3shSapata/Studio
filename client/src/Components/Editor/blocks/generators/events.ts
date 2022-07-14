import Blockly, { Block } from 'blockly';

Blockly.JavaScript['start_event'] = function (block: Block) {
    var dropdown_sprite = block.getFieldValue('sprite');
    var code = 'not_connected\n';
    if (block.nextConnection.isConnected()) {
        code = 'start,' + dropdown_sprite + ';';
    }
    return code;
};

Blockly.JavaScript['keyboard_event'] = function (block: Block) {
    var dropdown_key = block.getFieldValue('key');
    var dropdown_sprite = block.getFieldValue('sprite');
    var code = 'start_key,' + dropdown_sprite + ';';
    return code;
};

Blockly.JavaScript['start_event2'] = function (block: Block) {
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};
