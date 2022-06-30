import React, { FunctionComponent } from 'react';
import { GameAssetsType } from './AssetType';
import { ObjectType } from './ObjectType';
import { SpriteType } from './SpriteType';

export type actionType = {
    spriteID: number;
    instructions: string[];
};

export interface GameType {
    mazes: number[][][];
    level: number;
    sprites: SpriteType[];
    objects: ObjectType[];
    queue: actionType[];
    assets: GameAssetsType;
    canvasElement: FunctionComponent;
    score: number;
    maxScore: number;

    addAssets(assets: GameAssetsType): void;
    addCanvasElement(canvasElement: FunctionComponent): void;
    addSprite(sprite: SpriteType): void;
    addObject(object: ObjectType): void;
    getSprite(spriteID: number): SpriteType | undefined;
    getGoal(spriteID: number, x: number, y: number): SpriteType | undefined;
    initMaze(): React.ReactElement[];
    nextLevel(): void;
    clearLevel(): void;
    addInstructions(spriteID: number, code: string): void;
    canMove(sprite: SpriteType): boolean;
    didWin(): boolean;
    reset(): void;
    run(spriteID: number): actionType | undefined | boolean;
}
