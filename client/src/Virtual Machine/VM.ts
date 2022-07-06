import VMType from '../types/VMType';
import SpriteType from '../types/SpriteType';
import { actionType } from '../GameEngine/types/GameType';

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
