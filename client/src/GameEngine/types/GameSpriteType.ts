import GameObjectType from './GameObjectType';

export default interface GameSpriteType extends GameObjectType {
    dir: number;
    currFrame: number;
    target: number;
    changeX: number;
    changeY: number;
    spriteID: number;

    updateDir(dir: number): void;
    checkPos(): { x: number; y: number } | undefined;
    updatePos(): void;
    updateFrame(): void;
    getCords(): { x: number; y: number };
    stopAnimation(): boolean | undefined;
}
