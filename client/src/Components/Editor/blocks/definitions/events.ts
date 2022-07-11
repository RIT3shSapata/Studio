import Blockly from 'blockly';
import play from '../../../../assets/play-button.png';
import sprite1 from '../../../../assets/bcf454acf82e4504149f7ffe07081dbc.svg';
import sprite2 from '../../../../assets/d92aaf6cf44921905d51ca4a10a4f3d6.svg';

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

Blockly.Blocks['keyboard_event'] = {
    init: function () {
        this.appendDummyInput()
            .appendField('When')
            .appendField(
                new Blockly.FieldDropdown([
                    ['spacebar', 'Space'],
                    ['up arrow', 'ArrowUp'],
                    ['down arrow', 'ArrowDown'],
                    ['left arrow', 'ArrowLeft'],
                    ['right arrow', 'ArrowRight'],
                    ['a', 'KeyA'],
                    ['b', 'KeyB'],
                    ['c', 'KeyC'],
                    ['d', 'KeyD'],
                    ['e', 'KeyE'],
                    ['f', 'KeyF'],
                    ['g', 'KeyG'],
                    ['h', 'KeyH'],
                    ['i', 'KeyI'],
                    ['j', 'KeyJ'],
                    ['k', 'KeyK'],
                    ['l', 'KeyL'],
                    ['m', 'KeyM'],
                    ['n', 'KeyN'],
                    ['o', 'KeyO'],
                    ['p', 'KeyP'],
                    ['q', 'KeyQ'],
                    ['r', 'KeyR'],
                    ['s', 'KeyS'],
                    ['t', 'KeyT'],
                    ['u', 'KeyU'],
                    ['v', 'KeyV'],
                    ['w', 'KeyW'],
                    ['x', 'KeyX'],
                    ['y', 'KeyY'],
                    ['z', 'KeyZ'],
                    ['0', 'Digit0'],
                    ['1', 'Digit1'],
                    ['2', 'Digit2'],
                    ['3', 'Digit3'],
                    ['4', 'Digit4'],
                    ['5', 'Digit5'],
                    ['6', 'Digit6'],
                    ['7', 'Digit7'],
                    ['8', 'Digit8'],
                    ['9', 'Digit9'],
                ]),
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
