import { ToolBox } from '../../../types/ToolBoxTypes';

const HarvesterToolbox: ToolBox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'motion',
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
            name: 'loop',
            color: '300',
            expanded: 'true',
            contents: [
                //@ts-ignore
                { kind: 'block', type: 'loop' },
            ],
        },
        {
            kind: 'category',
            name: 'actions',
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
