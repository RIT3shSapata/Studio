import VMType from '../types/VMType';
import SpriteType from '../types/SpriteType';
import { actionType } from '../GameEngine/types/GameType';
import CanvasComponent from '../Components/CanvasComponent/CanvasComponent';
import { createElement, ReactElement, RefObject } from 'react';

export default class VM implements VMType {
    sprites;
    blocks;

    constructor() {
        this.sprites = new Array<SpriteType>();
        this.blocks = '';
    }
    addSprite(sprite: SpriteType) {
        this.sprites.push(sprite);
    }
    initVM(): ReactElement[] {
        const canvas = new Array<ReactElement>();
        this.sprites.forEach(async (sprite: SpriteType) => {
            canvas.push(
                createElement(CanvasComponent, {
                    sprite,
                    key: sprite.spriteID,
                })
            );
        });
        return canvas;
    }
    addInstructions(spriteID: number, code: string) {
        console.log(spriteID, code);
    }
    updateBackdrop(backdropID: number): void {
        console.log(backdropID);
    }
    execute(spriteID: number): void {
        console.log(spriteID);
    }
    getSprite(spriteID: number): SpriteType | undefined {
        return this.sprites.find((sprite: SpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }
    save(): string {
        return 'works';
    }
}
