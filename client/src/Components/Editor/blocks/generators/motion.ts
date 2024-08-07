import Blockly, { Block } from 'blockly';

Blockly.JavaScript['move'] = function (block: Block) {
    var number_steps = block.getFieldValue('steps');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'move,' + number_steps + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['turn_left'] = function (block: Block) {
    var angle_left = block.getFieldValue('left');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'turn,-' + angle_left + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['turn_right'] = function (block: Block) {
    var angle_right = block.getFieldValue('right');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'turn,' + angle_right + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['goto_1'] = function (block: Block) {
    var dropdown_goto = block.getFieldValue('goto');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['goto_2'] = function (block: Block) {
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'goto,' + number_x + ',' + number_y + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['glide_1'] = function (block: Block) {
    var number_seconds = block.getFieldValue('seconds');
    var dropdown_goto = block.getFieldValue('goto');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['glide_2'] = function (block: Block) {
    var number_seconds = block.getFieldValue('seconds');
    var number_x = block.getFieldValue('x');
    var number_y = block.getFieldValue('y');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.JavaScript['point_1'] = function (block: Block) {
    var angle_angle = block.getFieldValue('angle');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'point,' + angle_angle + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['point_2'] = function (block: Block) {
    var dropdown_goto = block.getFieldValue('goto');
    // TODO: Assemble JavaScript into code variable.
    var code = 'not_connected\n';
    return code;
};

Blockly.JavaScript['change_x'] = function (block: Block) {
    var number_x = block.getFieldValue('x');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'change_x,' + number_x + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['change_y'] = function (block: Block) {
    var number_y = block.getFieldValue('y');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'change_y,' + number_y + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['set_x'] = function (block: Block) {
    var number_x = block.getFieldValue('x');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'set_x,' + number_x + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};

Blockly.JavaScript['set_y'] = function (block: Block) {
    var number_y = block.getFieldValue('y');
    var code = 'not_connected\n';
    if (block.previousConnection.isConnected()) {
        code = 'set_y,' + number_y + ';';
    }
    if (!block.nextConnection.isConnected()) {
        code += '\n';
    }
    return code;
};
