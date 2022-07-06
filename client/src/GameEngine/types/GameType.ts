import React, { FunctionComponent } from 'react';
import { GameAssetsType } from './GameAssetType';
import { CanvasPropsType } from './CanvasPropsTypes';
import GameObjectType from './GameObjectType';
import GameSpriteType from './GameSpriteType';

export type actionType = {
    spriteID: number;
    instructions: string[];
};

export interface GameType {
    mazes: number[][][];
    level: number;
    sprites: GameSpriteType[];
    objects: GameObjectType[];
    queue: actionType[];
    score: number;
    maxScore: number;

    addMazes(mazes: number[][][]): void;
    addSprite(sprite: GameSpriteType): void;
    addObject(object: GameObjectType): void;
    getSprite(spriteID: number): GameSpriteType | undefined;
    getGoal(spriteID: number, x: number, y: number): GameSpriteType | undefined;
    initMaze(
        canvasElement: FunctionComponent<CanvasPropsType>,
        assets: GameAssetsType
    ): React.ReactElement | React.ReactElement[];
    nextLevel(): void;
    clearLevel(): void;
    addInstructions(spriteID: number, code: string): void;
    canMove(sprite: GameSpriteType): boolean;
    didWin(): boolean;
    reset(): void;
    run(spriteID: number): actionType | undefined;
}
