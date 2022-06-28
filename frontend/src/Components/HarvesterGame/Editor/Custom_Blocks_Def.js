import Blockly, { Block } from 'blockly';

Blockly.Blocks['start_block'] = {
    init: function () {
        this.appendDummyInput().appendField('Start');
        this.setNextStatement(true, null);
        this.setColour(120);
        this.setTooltip('Start the game');
        this.setHelpUrl('');
    },
    // onchange: function () {
    //     console.log(this.nextConnection.isConnected());
    // },
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

Blockly.Blocks['loop'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('Repeat')
            .appendField(
                new Blockly.FieldDropdown([
                    ['2', '2'],
                    ['3', '3'],
                    ['4', '4'],
                    ['5', '5'],
                    ['6', '6'],
                    ['7', '7'],
                    ['8', '8'],
                    ['9', '9'],
                    ['10', '10'],
                ]),
                'times'
            );
        this.appendStatementInput('NAME')
            .setCheck(null)
            .setAlign(Blockly.ALIGN_CENTRE)
            .appendField(
                new Blockly.FieldImage(
                    'https://studio.code.org/blockly/media/common_images/repeat-arrows.png',
                    30,
                    30,
                    { alt: '*', flipRtl: 'FALSE' }
                )
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(300);
        this.setTooltip('');
        this.setHelpUrl('');
    },
};