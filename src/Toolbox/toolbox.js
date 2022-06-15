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
        {
            kind: 'category',
            name: 'logic',
            color: '150',
            contents: [
                {
                    kind: 'block',
                    type: 'logic_boolean',
                    color: '110',
                },
                {
                    kind: 'block',
                    type: 'controls_if',
                },
                {
                    kind: 'block',
                    type: 'controls_ifelse',
                },
                {
                    kind: 'block',
                    type: 'logic_compare',
                },
                {
                    kind: 'block',
                    type: 'logic_operation',
                },
                {
                    kind: 'block',
                    type: 'logic_negate',
                },
                {
                    kind: 'block',
                    type: 'logic_null',
                },
                {
                    kind: 'block',
                    type: 'logic_ternary',
                },
                {
                    kind: 'block',
                    type: 'controls_if_if',
                },
                {
                    kind: 'block',
                    type: 'controls_if_elseif',
                },
                {
                    kind: 'block',
                    type: 'controls_if_elseif',
                },
                {
                    kind: 'block',
                    type: 'controls_if_else',
                },
                {
                    kind: 'block',
                    type: 'controls_if_if',
                },
                {
                    kind: 'block',
                    type: 'controls_if_if',
                },
            ],
        },
        {
            kind: 'category',
            name: 'color',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'colour_picker',
                },
                {
                    kind: 'block',
                    type: 'colour_random',
                },
                {
                    kind: 'block',
                    type: 'colour_rgb',
                },
                {
                    kind: 'block',
                    type: 'colour_blend',
                },
            ],
        },
        {
            kind: 'category',
            name: 'lists',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'lists_create_empty',
                },
                {
                    kind: 'block',
                    type: 'lists_repeat',
                },
                {
                    kind: 'block',
                    type: 'lists_reverse',
                },
                {
                    kind: 'block',
                    type: 'lists_isEmpty',
                },
                {
                    kind: 'block',
                    type: 'lists_length',
                },
            ],
        },
        {
            kind: 'category',
            name: 'loops',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'controls_repeat_ext',
                },
                {
                    kind: 'block',
                    type: 'controls_repeat',
                },
                {
                    kind: 'block',
                    type: 'controls_whileUntil',
                },
                {
                    kind: 'block',
                    type: 'controls_for',
                },
                {
                    kind: 'block',
                    type: 'controls_forEach',
                },
                {
                    kind: 'block',
                    type: 'controls_flow_statements',
                },
            ],
        },
        {
            kind: 'category',
            name: 'math',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'math_number',
                },
                {
                    kind: 'block',
                    type: 'math_arithmetic',
                },
                {
                    kind: 'block',
                    type: 'math_single',
                },
                {
                    kind: 'block',
                    type: 'math_trig',
                },
                {
                    kind: 'block',
                    type: 'math_constant',
                },
                {
                    kind: 'block',
                    type: 'math_number_property',
                },
                {
                    kind: 'block',
                    type: 'math_change',
                },
                {
                    kind: 'block',
                    type: 'math_round',
                },
                {
                    kind: 'block',
                    type: 'math_on_list',
                },
                {
                    kind: 'block',
                    type: 'math_modulo',
                },
                {
                    kind: 'block',
                    type: 'math_constrain',
                },
                {
                    kind: 'block',
                    type: 'math_random_int',
                },
                {
                    kind: 'block',
                    type: 'math_random_float',
                },
                {
                    kind: 'block',
                    type: 'math_atan2',
                },
            ],
        },
        {
            kind: 'category',
            name: 'vairables',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'text',
                },
                {
                    kind: 'block',
                    type: 'text_multiline',
                },
                {
                    kind: 'block',
                    type: 'text_join',
                },
                {
                    kind: 'block',
                    type: 'text_create_join_container',
                },
                {
                    kind: 'block',
                    type: 'text_create_join_item',
                },
                {
                    kind: 'block',
                    type: 'text_length',
                },
                {
                    kind: 'block',
                    type: 'text_isEmpty',
                },
                {
                    kind: 'block',
                    type: 'text_indexOf',
                },
                {
                    kind: 'block',
                    type: 'text_charAt',
                },
            ],
        },
        {
            kind: 'category',
            name: 'variables',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'variables_get',
                },
                {
                    kind: 'block',
                    type: 'variables_set',
                },
            ],
        },
        {
            kind: 'category',
            name: 'dynamic variables',
            color: '120',
            expanded: 'true',
            contents: [
                {
                    kind: 'block',
                    type: 'variables_get_dynamic',
                },
                {
                    kind: 'block',
                    type: 'variables_set_dynamic',
                },
            ],
        },
    ],
};
