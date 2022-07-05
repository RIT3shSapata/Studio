import React, { FunctionComponent } from 'react';
import { actionType } from './GameType';
import { SpriteType } from './SpriteType';

export default interface VMType {
    backdropID: number;
    sprites: SpriteType[];
    queue: actionType[];

    addSprite(sprite: SpriteType): void;
    updateBackdrop(backdropID: number): void;
    getSprite(spriteID: number): SpriteType | undefined;
}
