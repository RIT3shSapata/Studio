import VMType from '../types/VMType';
import StudioSpriteType from '../types/StudioSpriteType';
import { actionType } from '../types/GameType';

export default class VM implements VMType {
    backdropID;
    sprites;
    queue;

    constructor() {
        this.backdropID = 0;
        this.sprites = new Array<StudioSpriteType>();
        this.queue = new Array<actionType>();
    }
    addSprite(sprite: StudioSpriteType) {
        this.sprites.push(sprite);
    }
    updateBackdrop(backdropID: number) {
        this.backdropID = backdropID;
    }
    addInstructions(spriteID: number, code: string) {
        console.log(spriteID, code);
    }
    execute(spriteID: number): void {
        console.log(this.queue);
    }
    getSprite(spriteID: number): StudioSpriteType | undefined {
        return this.sprites.find((sprite: StudioSpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }
}
