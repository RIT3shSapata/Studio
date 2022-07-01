import { ToolBox } from '../../../types/ToolBoxTypes';

const HarvesterToolbox: ToolBox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Motion',
            color: '120',
            expanded: 'true',
            contents: [
                //@ts-ignore
                {
                    kind: 'block',
                    type: 'start_block',
                },
                //@ts-ignore
                {
                    kind: 'block',
                    type: 'up_block',
                },
                //@ts-ignore
                {
                    kind: 'block',
                    type: 'down_block',
                },
                //@ts-ignore
                {
                    kind: 'block',
                    type: 'right_block',
                },
                //@ts-ignore
                {
                    kind: 'block',
                    type: 'left_block',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Loop',
            color: '300',
            expanded: 'true',
            contents: [
                //@ts-ignore
                { kind: 'block', type: 'loop' },
            ],
        },
        {
            kind: 'category',
            name: 'Actions',
            color: '250',
            expanded: 'true',
            contents: [
                //@ts-ignore
                { kind: 'block', type: 'pick_corn' },
            ],
        },
    ],
};

export default HarvesterToolbox;
