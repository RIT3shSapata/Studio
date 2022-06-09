import Blockly from 'blockly';

Blockly.Blocks['start_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Start');
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Start the game');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['up_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Move up');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Move the sprite up');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['down_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Move down');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Move the sprite down');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['left_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Move left');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Move the sprite left');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['right_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Move right');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Move the sprite right');
        this.setHelpUrl('');
    },
};
