export default {
    kind: 'categoryToolbox',
    contents: [
        {
            kind: 'category',
            name: 'maze',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'start_block',
                },
                {
                    kind: 'block',
                    type: 'up_block',
                },
                {
                    kind: 'block',
                    type: 'down_block',
                },
                {
                    kind: 'block',
                    type: 'right_block',
                },
                {
                    kind: 'block',
                    type: 'left_block',
                },
            ],
        },
    ],
};
