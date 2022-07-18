import SpriteType from './SpriteType';

export type modeType =
    | 'select'
    | 'resize'
    | 'brush'
    | 'erase'
    | 'fill'
    | 'text'
    | 'line'
    | 'circle'
    | 'rectangle';
export default interface PaintState {
    mode: modeType;
    currentSprite: number;
    setMode: (mode: modeType) => void;
    setCurrentSprite: (sprite: number) => void;
}
