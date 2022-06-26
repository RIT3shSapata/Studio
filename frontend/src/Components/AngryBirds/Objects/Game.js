import CanvasComponent from '../CanvasComponent';
import GameAssets from '../GameAssets';
import React from 'react';
class Game {
    constructor() {
        this.mazes = [];
        this.level = 0;
        this.sprites = [];
        this.queue = [];
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addMaze(mazes) {
        this.mazes = mazes;
    }
    getSprite(spriteID) {
        let sprite;
        this.sprites.forEach((item) => {
            if (item.spriteID == spriteID) {
                sprite = item;
            }
        });
        return sprite;
    }
    initMaze() {
        const obj = {};
        const canvas = [];
        this.mazes[this.level].forEach((row_item, row_index) => {
            row_item.forEach((col_item, col_index) => {
                if (obj[col_item]) {
                    obj[col_item].push({ x: col_index, y: row_index });
                } else {
                    obj[col_item] = [{ x: col_index, y: row_index }];
                }
            });
        });
        canvas.push(
            React.createElement(CanvasComponent, {
                spriteID: 10,
                key: 10,
                cords: [
                    {
                        x: 0,
                        y: 0,
                    },
                ],
                properties: GameAssets[10],
            })
        );
        Object.keys(obj).forEach((key) => {
            canvas.push(
                React.createElement(CanvasComponent, {
                    spriteID: key,
                    key,
                    cords: obj[key],
                    properties: GameAssets[key],
                })
            );
        });
        return canvas;
    }
    addInstructions(spriteID, code) {
        const instructions = code.split('\n');
        if (instructions.includes('not_connected')) {
            alert('Connect all blocks');
        }
        this.queue.push({ spriteID, instructions });
    }
    canMove(sprite) {
        const { x, y } = sprite.checkPos();
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 8 || nextPos === 7;
    }
    didWin(sprite) {
        const x = sprite.x;
        const y = sprite.y;
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 7;
    }
    run(spriteID) {
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
