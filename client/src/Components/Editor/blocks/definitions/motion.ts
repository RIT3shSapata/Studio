import Blockly from 'blockly';
import left from '../../../../assets/rotate-left.svg';
import right from '../../../../assets/rotate-right.svg';

Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('move')
            .appendField(new Blockly.FieldNumber(10), 'steps')
            .appendField('steps');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['turn_left'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('turn')
            .appendField(new Blockly.FieldImage(left, 15, 15))
            .appendField(new Blockly.FieldAngle(15), 'left')
            .appendField('degrees');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['turn_right'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('turn')
            .appendField(new Blockly.FieldImage(right, 15, 15))
            .appendField(new Blockly.FieldAngle(15), 'right')
            .appendField('degrees');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['goto_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('goto')
            .appendField(
                new Blockly.FieldDropdown([
                    ['random position', 'random'],
                    ['mouse pointer', 'mouse'],
                ]),
                'goto'
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['goto_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('go to x:')
            .appendField(new Blockly.FieldNumber(0), 'x')
            .appendField('y:')
            .appendField(new Blockly.FieldNumber(0), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['glide_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('glide')
            .appendField(new Blockly.FieldNumber(1), 'seconds')
            .appendField('secs to ')
            .appendField(
                new Blockly.FieldDropdown([
                    ['random position', 'random'],
                    ['mouse pointer', 'mouse'],
                ]),
                'goto'
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['glide_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('glide')
            .appendField(new Blockly.FieldNumber(1), 'seconds')
            .appendField('secs to x:')
            .appendField(new Blockly.FieldNumber(0), 'x')
            .appendField('y:')
            .appendField(new Blockly.FieldNumber(0), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['point_1'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('point in direction')
            .appendField(new Blockly.FieldAngle(90), 'angle');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['point_2'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('point in direction')
            .appendField(
                new Blockly.FieldDropdown([['mouse pointer', 'mouse']]),
                'goto'
            );
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['change_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('change x by')
            .appendField(new Blockly.FieldNumber(0), 'x');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['change_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('change y by')
            .appendField(new Blockly.FieldNumber(0), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['set_x'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set x to ')
            .appendField(new Blockly.FieldNumber(0), 'x');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

Blockly.Blocks['set_y'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('set y to ')
            .appendField(new Blockly.FieldNumber(0), 'y');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour('#3b82f6');
        this.setTooltip('');
        this.setHelpUrl('');
    },
};
