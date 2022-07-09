import { ReactElement } from 'react';
import SpriteType from './SpriteType';
import ActionType from './ActionType';

export default interface VMType {
    sprites: SpriteType[];
    blocks: string;
    queue: ActionType[];
    keyListener: any;

    addSprite(sprite: SpriteType): void;
    initVM(): ReactElement[];
    updateBackdrop(backdropID: number): void;
    getSprite(spriteID: number): SpriteType | undefined;
    addAllInstructions(code: string): void;
    execute(spriteID: number, instructions: string[]): void;
    executeEvent(): void;
    executeStart(): void;
    save(): string;
    addKeyListner(key: string): void;
}
