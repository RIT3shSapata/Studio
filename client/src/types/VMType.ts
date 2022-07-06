import { ReactElement } from 'react';
import { actionType } from '../GameEngine/types/GameType';
import SpriteType from './SpriteType';

export default interface VMType {
    sprites: SpriteType[];
    blocks: string;

    addSprite(sprite: SpriteType): void;
    initVM(): ReactElement[];
    updateBackdrop(backdropID: number): void;
    getSprite(spriteID: number): SpriteType | undefined;
    addInstructions(spriteID: number, code: string): void;
    execute(spriteID: number): void;
    save(): string;
}
