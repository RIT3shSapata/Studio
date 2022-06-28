import Blockly from 'blockly';

Blockly.JavaScript['start_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected';
    if (block.nextConnection.isConnected()) {
        code = 'start_game\n';
    }

    return code;
};

Blockly.JavaScript['up_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected';
    if (block.previousConnection.isConnected()) {
        code = 'move_up\n';
    }
    return code;
};

Blockly.JavaScript['down_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected';
    if (block.previousConnection.isConnected()) {
        code = 'move_down\n';
    }
    return code;
};

Blockly.JavaScript['left_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected';
    if (block.previousConnection.isConnected()) {
        code = 'move_left\n';
    }
    return code;
};

Blockly.JavaScript['right_block'] = function (block) {
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected';
    if (block.previousConnection.isConnected()) {
        code = 'move_right\n';
    }
    return code;
};

Blockly.JavaScript['loop'] = function (block) {
    var dropdown_times = block.getFieldValue('times');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var code = 'not_connected';
    if (block.previousConnection.isConnected()) {
        code = '';
        for (let i = 0; i < Number(dropdown_times); i++) {
            code += statements_name;
        }
    }
    // TODO: Assemble JavaScript into code variable.
    return code;
};
