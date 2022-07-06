import React, { FunctionComponent } from 'react';
import { GameAssetsType, AssetCords } from './types/AssetType';
import { CanvasPropsType } from './types/CanvasPropsTypes';
import { GameType, actionType } from './types/GameType';
import  GameObjectType from './types/GameObjectType';
import  GameSpriteType  from './types/GameSpriteType';

class Game implements GameType {
    mazes;
    level;
    sprites;
    objects;
    queue;
    score;
    maxScore;

    constructor() {
        this.mazes = new Array<Array<Array<number>>>;
        this.level = 0;
        this.sprites = new Array<GameSpriteType>();
        this.queue = new Array<actionType>();
        this.objects = new Array<GameObjectType>();
        this.score = 0;
        this.maxScore = 0;
    }

    addMazes(mazes: number[][][]) {
        this.mazes = mazes;
    }

    addSprite(sprite: GameSpriteType) {
            this.sprites.push(sprite);
    }

    addObject(object: GameObjectType) {
        this.objects.push(object);
    }

    getSprite(spriteID: number) {
        return this.sprites.find((sprite: GameSpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }

    getGoal(spriteID: number, x: number, y: number) {
        return this.sprites.find((sprite: GameSpriteType) => {
            return (
                sprite.spriteID === spriteID && sprite.x === x && sprite.y === y
            );
        });
    }

    initMaze(
        canvasElement: FunctionComponent<CanvasPropsType>,
        assets: GameAssetsType
    ) {
        const obj: AssetCords = {};
        const canvas = [];
        this.mazes[this.level].forEach(
            (row_item: number[], row_index: number) => {
                row_item.forEach((col_item, col_index) => {
                    if (obj[col_item]) {
                        obj[col_item].push({ x: col_index, y: row_index });
                    } else {
                        obj[col_item] = [{ x: col_index, y: row_index }];
                    }
                });
            }
        );
        const backGroundProps: CanvasPropsType = {
            spriteID: 0,
            key: 0,
            cords: [
                {
                    x: 0,
                    y: 0,
                },
            ],
            properties: assets[0],
        };
        canvas.push(React.createElement(canvasElement, backGroundProps));
        Object.keys(obj).forEach((key) => {
            const props: CanvasPropsType = {
                spriteID: +key,
                key: +key,
                cords: obj[+key],
                properties: assets[+key],
            };
            canvas.push(React.createElement(canvasElement, props));
        });
        return canvas;
    }

    nextLevel() {
        this.level = this.level + 1;
    }

    reset() {
        this.sprites = new Array<GameSpriteType>();
        this.queue = new Array<actionType>();
        this.objects = new Array<GameObjectType>();
        this.score = 0;
        this.maxScore = 0;
    }

    clearLevel() {
        this.reset();
    }

    addInstructions(spriteID: number, code: string) {
        const instructions: string[] = code.split('\n');
        if (instructions.includes('not_connected')) {
            //TODO: Handle Error in a better manner
            alert('Connect all blocks');
        }
        const action: actionType = {
            spriteID,
            instructions,
        };
        this.queue.push(action);
    }

    canMove(sprite: GameSpriteType) {
        const pos: { x: number; y: number } | undefined = sprite.checkPos();
        console.log(pos)
        if (!pos) return false;
        const nextPos = this.mazes[this.level][pos.y][pos.x];
        return nextPos === 8 || nextPos === 9;
    }

    didWin() {
        const sprite: GameSpriteType | undefined = this.getSprite(7);
        if (!sprite) return false;
        const x = sprite.x;
        const y = sprite.y;
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 8;
    }

    run(spriteID: number) {
        let i = -1;
        this.queue.forEach((item, index) => {
            if (item.spriteID == spriteID) {
                i = index;
            }
        });
        if (i === -1) return undefined;
        const action = this.queue.splice(i, 1)[0];
        return action;
    }
}

export default Game;
