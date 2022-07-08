import Blockly, { Block } from 'blockly';
import play from '../../assets/play-button.png';
import left from '../../assets/rotate-left.svg';
import right from '../../assets/rotate-right.svg';
import sprite1 from '../../assets/bcf454acf82e4504149f7ffe07081dbc.svg';
import sprite2 from '../../assets/d92aaf6cf44921905d51ca4a10a4f3d6.svg';

Blockly.Blocks['start_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('When')
            .appendField(new Blockly.FieldImage(play, 20, 20))
            .appendField('Clicked for ')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        {
                            src: sprite1,
                            width: 15,
                            height: 15,
                            alt: '*',
                        },
                        '0',
                    ],
                    [
                        {
                            src: sprite2,
                            width: 15,
                            height: 15,
                            alt: '*',
                        },
                        '1',
                    ],
                ]),
                'sprite'
            );
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('');
    },
};

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

Blockly.Blocks['keyboard_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('When')
            .appendField(
                new Blockly.FieldDropdown([['spacebar', 'Space']]),
                'key'
            )
            .appendField('pressed')
            .appendField(
                new Blockly.FieldDropdown([
                    [
                        {
                            src: sprite1,
                            width: 15,
                            height: 15,
                            alt: '*',
                        },
                        '0',
                    ],
                    [
                        {
                            src: sprite2,
                            width: 15,
                            height: 15,
                            alt: '*',
                        },
                        '1',
                    ],
                ]),
                'sprite'
            );
        this.setNextStatement(true, null);
        this.setColour(60);
        this.setTooltip('');
        this.setHelpUrl('');
    },
};
