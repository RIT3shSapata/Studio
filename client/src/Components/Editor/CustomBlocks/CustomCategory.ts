//@ts-nocheck
import * as Blockly from 'blockly/core';
import logo_only from '../../../assets/logo_only.svg';
export default class CustomCategory extends Blockly.ToolboxCategory {
    /**
     * Constructor for a custom category.
     * @override
     */
    constructor(categoryDef: any, toolbox: any, opt_parent: any) {
        super(categoryDef, toolbox, opt_parent);
    }

    /**
     * Adds the colour to the toolbox.
     * This is called on category creation and whenever the theme changes.
     * @override
     */
    addColourBorder_(colour: string) {
        //@ts-ignore
        this.rowDiv_.style.backgroundColor = colour;
        console.log(colour);
    }

    /**
     * Sets the style for the category when it is selected or deselected.
     * @param {boolean} isSelected True if the category has been selected,
     *     false otherwise.
     * @override
     */
    //@ts-ignore
    setSelected(isSelected) {
        // We do not store the label span on the category, so use getElementsByClassName.
        var labelDom =
            //@ts-ignore
            this.rowDiv_.getElementsByClassName('blocklyTreeLabel')[0];
        if (isSelected) {
            // Change the background color of the div to white.
            //@ts-ignore
            this.rowDiv_.style.backgroundColor = 'white';
            // Set the colour of the text to the colour of the category.
            //@ts-ignore
            labelDom.style.color = this.colour_;
            //@ts-ignore
            this.iconDom_.style.color = this.colour_;
        } else {
            // Set the background back to the original colour.
            //@ts-ignore
            this.rowDiv_.style.backgroundColor = this.colour_;
            // Set the text back to white.
            //@ts-ignore
            labelDom.style.color = 'white';
            //@ts-ignore
            this.iconDom_.style.color = 'white';
        }
        // This is used for accessibility purposes.
        Blockly.utils.aria.setState(
            //@ts-ignore
            /** @type {!Element} */ this.htmlDiv_,
            Blockly.utils.aria.State.SELECTED,
            isSelected
        );
    }

    /**
     * Creates the dom used for the icon.
     * @return {HTMLElement} The element for the icon.
     * @override
     */
    createIconDom_() {
        console.log(this.toolboxItemDef_);
        const div = document.createElement('div');
        switch (this.toolboxItemDef_.name) {
            case 'motion':
                div.className =
                    'bg-blue-500 h-5 w-5 rounded-full border-2 border-blue-600';
                break;
            case 'loop':
                div.className =
                    'bg-orange-500 h-5 w-5 rounded-full border-2 border-orange-600';
                break;
            case 'actions':
                div.className =
                    'bg-red-400 h-5 w-5 rounded-full border-2 border-red-500';
                break;
            default:
                div.className =
                    'bg-blue-500 h-5 w-5 rounded-full border-2 border-blue-600';
        }
        return div;
        // const iconImg = document.createElement('img');
        // iconImg.src = logo_only;
        // iconImg.alt = 'Blockly Logo';
        // //@ts-ignore
        // iconImg.width = '25';
        // //@ts-ignore
        // iconImg.height = '25';
        // return iconImg;
    }
}

Blockly.registry.register(
    Blockly.registry.Type.TOOLBOX_ITEM,
    Blockly.ToolboxCategory.registrationName,
    CustomCategory,
    true
);
