import VMType from '../types/VMType';
import SpriteType from '../types/SpriteType';
import { actionType } from '../GameEngine/types/GameType';

export default class VM implements VMType {
    backdropID;
    sprites;
    queue;

    constructor() {
        this.backdropID = 0;
        this.sprites = new Array<SpriteType>();
        this.queue = new Array<actionType>();
    }
    addSprite(sprite: SpriteType) {
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
    getSprite(spriteID: number): SpriteType | undefined {
        return this.sprites.find((sprite: SpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }
}
