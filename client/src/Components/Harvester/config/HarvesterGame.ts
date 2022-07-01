import React, { FunctionComponent } from 'react';
import Game from '../../../GameEngine/Game';
import { AssetCords, GameAssetsType } from '../../../types/AssetType';
import { CanvasPropsType } from '../../../types/CanvasPropsTypes';
import { GameType } from '../../../types/GameType';
import { SpriteType } from '../../../types/SpriteType';

export interface HarvesterGameType extends GameType {}

class HarvesterGame extends Game implements HarvesterGame {
    initMaze(
        canvasElement: FunctionComponent<CanvasPropsType>,
        assets: GameAssetsType
    ) {
        const obj: AssetCords = {};
        const canvas = [];
        this.mazes[this.level].forEach(
            (row_item: number[], row_index: number) => {
                row_item.forEach((col_item, col_index) => {
                    if (col_item === 4) {
                        if (obj[2]) {
                            obj[2].push({ x: col_index, y: row_index });
                        } else {
                            obj[2] = [{ x: col_index, y: row_index }];
                        }
                        this.maxScore++;
                    }
                    if (col_item === 3) {
                        if (obj[2]) {
                            obj[2].push({ x: col_index, y: row_index });
                        } else {
                            obj[2] = [{ x: col_index, y: row_index }];
                        }
                    }
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
            if (+key === 1) return;
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

    canMove(sprite: SpriteType) {
        const pos: { x: number; y: number } | undefined = sprite.checkPos();
        console.log(pos);
        if (!pos) return false;
        const nextPos = this.mazes[this.level][pos.y][pos.x];
        return nextPos === 2 || nextPos === 4;
    }

    didWin() {
        return this.score === this.maxScore;
    }
}

export default HarvesterGame;
