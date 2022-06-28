import HarvesterGameCanvas from '../HarvesterGameCanvas';
import React from 'react';
import HarvesterGameAssets from '../HarvesterGameAssets';
class Game {
    constructor() {
        this.mazes = [];
        this.level = 0;
        this.sprites = [];
        this.queue = [];
        this.maxScore = 0;
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
            React.createElement(HarvesterGameCanvas, {
                spriteID: 10,
                key: 10,
                cords: [
                    {
                        x: 0,
                        y: 0,
                    },
                ],
                properties: HarvesterGameAssets[10],
            })
        );
        Object.keys(obj).forEach((key) => {
            if (key == 0) return;
            canvas.push(
                React.createElement(HarvesterGameCanvas, {
                    spriteID: key,
                    key,
                    cords: obj[key],
                    properties: HarvesterGameAssets[key],
                })
            );
        });
        return canvas;
    }
    nextLevel() {
        this.level = this.level + 1;
    }
    clearLevel() {
        const container = document.getElementById('canvas_container');
        try {
            while (container.hasChildNodes && container.lastChild) {
                container.removeChild(container.lastChild);
            }
        } catch (e) {
            console.log(e);
        }
        this.sprites = [];
        this.queue = [];
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
        console.log(x, y);
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 1 || nextPos === 3;
        // return nextPos === 0 || nextPos === 3;
    }
    didWin(sprite) {
        const x = sprite.x;
        const y = sprite.y;
        const nextPos = this.mazes[this.level][y][x];
        return nextPos === 3;
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
