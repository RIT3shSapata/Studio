import { ToolBox } from '../../../types/ToolBoxTypes';
const AngryBirdsToolbox: ToolBox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'maze',
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
    ],
};

export default AngryBirdsToolbox;
