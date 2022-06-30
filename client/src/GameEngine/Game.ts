import React, { FunctionComponent } from 'react';
import { GameAssetsType, AssetCords } from '../types/AssetType';
import { CanvasPropsType } from '../types/CanvasPropsTypes';
import { GameType, actionType } from '../types/GameType';
import { ObjectType } from '../types/ObjectType';
import { SpriteType } from '../types/SpriteType';

class Game implements GameType {
    mazes;
    level;
    sprites;
    objects;
    queue;
    assets;
    canvasElement;
    score;
    maxScore;

    constructor(
        mazes: number[][][],
        assets: GameAssetsType,
        canvasElement: FunctionComponent<CanvasPropsType>
    ) {
        this.mazes = mazes;
        this.level = 0;
        this.sprites = new Array<SpriteType>();
        this.queue = new Array<actionType>();
        this.objects = new Array<ObjectType>();
        this.assets = assets;
        this.canvasElement = canvasElement;
        this.score = 0;
        this.maxScore = 0;
    }

    addAssets(assets: GameAssetsType): void {
        this.assets = assets;
    }

    addSprite(sprite: SpriteType) {
        if (!sprite) {
            this.sprites.push(sprite);
        }
    }

    addObject(object: ObjectType) {
        this.objects.push(object);
    }

    getSprite(spriteID: number) {
        return this.sprites.find((sprite: SpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }

    getGoal(spriteID: number, x: number, y: number) {
        return this.sprites.find((sprite: SpriteType) => {
            return (
                sprite.spriteID === spriteID && sprite.x === x && sprite.y === y
            );
        });
    }

    initMaze() {
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
            properties: this.assets[0],
        };
        canvas.push(React.createElement(this.canvasElement, backGroundProps));
        Object.keys(obj).forEach((key) => {
            const props: CanvasPropsType = {
                spriteID: +key,
                key: +key,
                cords: obj[+key],
                properties: this.assets[+key],
            };
            canvas.push(React.createElement(this.canvasElement, props));
        });
        return canvas;
    }

    nextLevel() {
        this.level = this.level + 1;
    }

    reset() {
        this.sprites = new Array<SpriteType>();
        this.queue = new Array<actionType>();
        this.objects = new Array<ObjectType>();
        this.score = 0;
        this.maxScore = 0;
    }

    clearLevel() {
        const container: HTMLElement | null =
            document.getElementById('canvas_container');
        try {
            while (container?.hasChildNodes && container?.lastChild) {
                container.removeChild(container.lastChild);
            }
        } catch (e) {
            console.log(e);
        }
        this.reset();
    }

    addInstructions(spriteID: number, code: string) {
        const instructions: string[] = code.split('\n');
        if (instructions.includes('not_connected')) {
            //TODO: Handle Error in a better manner
            alert('Connect all blocks');
        }
        const action: actionType | null = {
            spriteID,
            instructions,
        };
        this.queue.push(action);
    }

    canMove(sprite: SpriteType) {
        const pos: { x: number; y: number } | undefined = sprite.checkPos();
        if (!pos) return false;
        const nextPos = this.mazes[this.level][pos.y][pos.x];
        return nextPos === 8 || nextPos === 7;
    }

    didWin() {
        const sprite: SpriteType | undefined = this.getSprite(6);
        if (!sprite) return false;
        const x = sprite.x;
        const y = sprite.y;
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 7;
    }

    run(spriteID: number) {
        let i = -1;
        this.queue.forEach((item, index) => {
            if (item.spriteID == spriteID) {
                i = index;
            }
        });
        if (i === -1) return false;
        const action = this.queue.splice(i, 1)[0];
        return action;
    }
}

export default Game;
