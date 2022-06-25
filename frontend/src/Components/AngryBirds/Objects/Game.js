import CanvasComponent from '../CanvasComponent';
import GameAssets from '../GameAssets';
import React from 'react';
class Game {
    constructor() {
        this.maze = [];
        this.sprites = [];
        this.queue = [];
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addMaze(maze) {
        this.maze = maze;
    }
    initMaze() {
        const obj = {};
        const canvas = [];
        this.maze.forEach((row_item, row_index) => {
            row_item.forEach((col_item, col_index) => {
                if (obj[col_item]) {
                    obj[col_item].push({ x: col_index, y: row_index });
                } else {
                    obj[col_item] = [{ x: col_index, y: row_index }];
                }
            });
        });
        Object.keys(obj).forEach((key) => {
            console.log(GameAssets[key]);
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
    run(spriteID) {
        let i;
        this.queue.forEach((item, index) => {
            if (item.spriteID === spriteID) {
                i = index;
            }
        });
        const action = this.queue.splice(i, 1)[0];
        return action.instructions;
    }
}

export default Game;
