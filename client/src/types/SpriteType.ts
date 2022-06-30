import { ObjectType } from './ObjectType';
import { cords } from './AssetType';

export interface SpriteType extends ObjectType {
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
}
