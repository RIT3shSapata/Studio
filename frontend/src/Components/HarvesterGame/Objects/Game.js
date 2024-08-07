import HarvesterGameCanvas from '../HarvesterGameCanvas';
import React from 'react';
import HarvesterGameAssets from '../HarvesterGameAssets';
import HarvesterGameCanvas2 from '../HarvesterGameCanvas2';
import GameObject from './Object';
class Game {
    constructor() {
        this.mazes = [];
        this.level = 0;
        this.sprites = [];
        this.objects = [];
        this.queue = [];
        this.maxScore = 0;
        this.score = 0;
    }
    copyGame(newGame) {
        this.mazes = newGame.mazes;
        this.level = newGame.level;
        this.sprites = newGame.sprites;
        this.objects = newGame.objects;
        this.queue = newGame.queue;
        this.maxScore = newGame.maxScore;
        this.score = newGame.score;
    }
    initGame() {
        const obj = {};
        const canvas = [];
        this.objects.forEach((object) => {
            if (obj[object.assetID]) {
                obj[object.assetID].push({ x: object.x, y: object.y });
            } else {
                obj[object.assetID] = [{ x: object.x, y: object.y }];
            }
        });
        this.sprites.forEach((sprite) => {
            obj[1].push({ x: sprite.x, y: sprite.y });
            if (obj[sprite.assetID]) {
                obj[sprite.assetID].push({ x: sprite.x, y: sprite.y });
            } else {
                obj[sprite.assetID] = [{ x: sprite.x, y: sprite.y }];
            }
        });
        this.objects = [];
        this.sprites = [];
        console.log(obj);
        canvas.push(
            React.createElement(HarvesterGameCanvas, {
                spriteID: 10,
                key: 10,
                cords: obj[10],
                properties: HarvesterGameAssets[10],
            })
        );
        Object.keys(obj).forEach((key) => {
            if (key == 0 || key == 10) return;
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
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addObject(object) {
        this.objects.push(object);
    }
    addMaze(mazes) {
        this.mazes = mazes;
    }
    getSprite(spriteID) {
        let sprite;
        this.sprites.forEach((item) => {
            if (item.spriteID == 3) {
                sprite = item;
            }
        });
        return sprite;
    }
    getGoal(spriteID, x, y) {
        let goal;
        let i;
        this.sprites.forEach((item, index) => {
            if (item.spriteID == spriteID && item.x == x && item.y == y) {
                goal = item;
                i = index;
            }
        });
        this.sprites.splice(i, 1);
        return goal;
    }
    initMaze() {
        const obj = {};
        const canvas = [];
        this.mazes[this.level].forEach((row_item, row_index) => {
            row_item.forEach((col_item, col_index) => {
                if (col_item === 3) {
                    if (obj[1]) {
                        obj[1].push({ x: col_index, y: row_index });
                    } else {
                        obj[1] = [{ x: col_index, y: row_index }];
                    }
                    this.maxScore++;
                }
                if (col_item === 2) {
                    if (obj[1]) {
                        obj[1].push({ x: col_index, y: row_index });
                    } else {
                        obj[1] = [{ x: col_index, y: row_index }];
                    }
                }
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
        this.reset();
        const container = document.getElementById('canvas_container');
        try {
            while (container.hasChildNodes && container.lastChild) {
                container.removeChild(container.lastChild);
            }
        } catch (e) {
            console.log(e);
        }
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
        return nextPos === 1 || nextPos === 3;
        // return nextPos === 0 || nextPos === 3;
    }
    didWin() {
        // const x = sprite.x;
        // const y = sprite.y;
        // const nextPos = this.mazes[this.level][y][x];
        // return nextPos === 3;
        return this.score === this.maxScore;
    }
    reset() {
        this.score = 0;
        this.maxScore = 0;
        this.sprites = [];
        this.queue = [];
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
