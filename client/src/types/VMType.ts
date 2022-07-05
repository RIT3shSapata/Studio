import React, { FunctionComponent } from 'react';
import { actionType } from './GameType';
import StudioSpriteType from './StudioSpriteType';

export default interface VMType {
    backdropID: number;
    sprites: StudioSpriteType[];
    queue: actionType[];

    addSprite(sprite: StudioSpriteType): void;
    updateBackdrop(backdropID: number): void;
    getSprite(spriteID: number): StudioSpriteType | undefined;
    addInstructions(spriteID: number, code: string): void;
    execute(spriteID: number): void;
}
