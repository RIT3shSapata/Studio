import background from './assets/background.png';
import bird from './assets/move_avatar_1.png';
import obstacle from './assets/obstacle_1.png';
import goal_idle from './assets/goal_idle.gif';
import wooden_tile from './assets/wooden_tile.png';
import stone_square from './assets/stone_square.png';
import stone_triangle from './assets/stone_square.png';
import glass_triangle from './assets/glass_triangle.png';
import wooden_triangle from './assets/wood_triangle.png';

const GRID_SIZE = 64;
const SPRITE_SIZE = 150;

export default {
    0: {
        name: 'wooden-square',
        type: 'object',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: wooden_tile,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    1: {
        name: 'stone-triangle',
        type: 'object',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: stone_triangle,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    2: {
        name: 'glass-triangle',
        type: 'object',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: glass_triangle,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    3: {
        name: 'stone-square',
        type: 'object',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: stone_square,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    4: {
        name: 'wooden-triangle',
        type: 'object',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: wooden_triangle,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    5: {
        name: 'tnt',
        type: 'object',
        height: 76,
        width: 72,
        src: obstacle,
        srcX: 0,
        srcY: 0,
        scale: 0.8,
    },
    6: {
        name: 'angry-bird',
        type: 'sprite',
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        src: bird,
        srcX: 150,
        srcY: 0,
        scale: 0.4,
    },
    7: {
        name: 'pig',
        type: 'sprite',
        height: SPRITE_SIZE,
        width: SPRITE_SIZE,
        src: goal_idle,
        srcX: 0,
        srcY: 0,
        scale: 0.4,
    },
    8: {
        name: 'empty',
        type: 'empty',
        height: GRID_SIZE,
        width: GRID_SIZE,
        src: '',
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    10: {
        name: 'background',
        type: 'background',
        height: 250,
        width: 250,
        src: background,
        srcX: 0,
        srcY: 0,
        scale: 40,
    },
};
