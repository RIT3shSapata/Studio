//@ts-nocheck
import { ToolBox } from '../../../types/ToolBoxTypes';

const StudioToolBox: ToolBox = {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'Motion',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'move',
                },
                {
                    kind: 'block',
                    type: 'turn_left',
                },
                {
                    kind: 'block',
                    type: 'turn_right',
                },
                // {
                //     kind: 'block',
                //     type: 'goto_1',
                // },
                {
                    kind: 'block',
                    type: 'goto_2',
                },
                // {
                //     kind: 'block',
                //     type: 'glide_1',
                // },
                // {
                //     kind: 'block',
                //     type: 'glide_2',
                // },
                {
                    kind: 'block',
                    type: 'point_1',
                },
                // {
                //     kind: 'block',
                //     type: 'point_2',
                // },
                {
                    kind: 'block',
                    type: 'change_x',
                },
                {
                    kind: 'block',
                    type: 'set_x',
                },
                {
                    kind: 'block',
                    type: 'change_y',
                },
                {
                    kind: 'block',
                    type: 'set_y',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Looks',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'backdrop_select',
                },
                {
                    kind: 'block',
                    type: 'next_backdrop',
                },
            ],
        },
        {
            kind: 'category',
            name: 'Events',
            color: '300',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'start_event',
                },
                {
                    kind: 'block',
                    type: 'start_event2',
                },
                {
                    kind: 'block',
                    type: 'keyboard_event',
                },
            ],
        },
    ],
};

export default StudioToolBox;
