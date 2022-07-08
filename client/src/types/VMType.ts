import { ReactElement } from 'react';
import { actionType } from '../GameEngine/types/GameType';
import SpriteType from './SpriteType';

export default interface VMType {
    sprites: SpriteType[];
    blocks: string;
    queue: actionType[];
    keyListener: any;

    addSprite(sprite: SpriteType): void;
    initVM(): ReactElement[];
    updateBackdrop(backdropID: number): void;
    getSprite(spriteID: number): SpriteType | undefined;
    addAllInstructions(code: string): void;
    execute(): void;
    save(): string;
    addKeyListner(key: string): void;
}
