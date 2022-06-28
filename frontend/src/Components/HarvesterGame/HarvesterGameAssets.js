import avatar from './assets/avatar.png';
import background from './assets/background3.png';
import corn from './assets/corn.png';
import tile from './assets/tiles.png';

export default {
    10: {
        name: 'background',
        type: 'background',
        height: 400,
        width: 400,
        src: background,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
    1: {
        name: 'tile',
        type: 'empty',
        height: 50,
        width: 50,
        src: tile,
        srcX: 0,
        srcY: 0,
        scale: 1.05,
    },
    2: {
        name: 'avatar',
        type: 'sprite',
        height: 50,
        width: 50,
        src: avatar,
        srcX: 198,
        srcY: 0,
        scale: 1,
    },
    3: {
        name: 'corn',
        type: 'goal',
        height: 50,
        width: 50,
        src: corn,
        srcX: 0,
        srcY: 0,
        scale: 1,
    },
};
