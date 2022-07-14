import Blockly from 'blockly';

const DefineLooks: (backdropField: string[][]) => void = (backdropField) => {
    Blockly.Blocks['backdrop_select'] = {
        init: function () {
            this.appendDummyInput()
                .appendField('switch backdrop to ')
                .appendField(
                    new Blockly.FieldDropdown([
                        ...backdropField,
                        ['next backdrop', 'next'],
                        ['previous backdrop', 'prev'],
                        ['random backdrop', 'rand'],
                    ]),
                    'backdrop'
                );
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#a855f7');
            this.setTooltip('');
            this.setHelpUrl('');
        },
    };

    Blockly.Blocks['next_backdrop'] = {
        init: function () {
            this.appendDummyInput().appendField('next backdrop');
            this.setPreviousStatement(true, null);
            this.setNextStatement(true, null);
            this.setColour('#a855f7');
            this.setTooltip('');
            this.setHelpUrl('');
        },
    };
};

export default DefineLooks;
