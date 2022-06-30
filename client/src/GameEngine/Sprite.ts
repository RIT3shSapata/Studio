import { SpriteType } from '../types/SpriteType';
import Object from './Object';
import { cords } from '../types/AssetType';
/* 
VLAUES OF DIR
0 = left
1 = right
2 = up
3 = down
*/

const FRAMEUPDATE = 25;

class Sprite extends Object implements SpriteType {
    dir;
    currFrame;
    target;
    changeX;
    changeY;
    spriteID;

    constructor(
        image: HTMLImageElement,
        width: number,
        height: number,
        x: number,
        y: number,
        srcX: number,
        srcY: number,
        context: CanvasRenderingContext2D,
        scale: number,
        dir: number,
        frames: number,
        spriteID: number
    ) {
        super(image, width, height, x, y, srcX, srcY, context, scale, frames);
        this.dir = dir;
        this.frames = frames;
        this.currFrame = 0;
        this.target = 0;
        this.changeX = 0;
        this.changeY = 0;
        this.spriteID = spriteID;
    }
    updateDir(dir: number) {
        this.dir = dir;
        switch (this.dir) {
            case 0:
                // this.srcX = 450;
                this.target = this.convertToCord(this.x - 1);
                this.changeX = -1;
                break;
            case 1:
                // this.srcX = 150;
                this.target = this.convertToCord(this.x + 1);
                this.changeX = 1;
                break;
            case 2:
                // this.srcX = 0;
                this.target = this.convertToCord(this.y - 1);
                this.changeY = -1;
                break;
            case 3:
                // this.srcX = 300;
                this.target = this.convertToCord(this.y + 1);
                this.changeY = 1;
                break;
            default:
                // this.srcX = 150;
                break;
        }
    }
    checkPos() {
        switch (this.dir) {
            case 0:
                return { x: this.x - 1, y: this.y };
            case 1:
                return {
                    x: this.x + 1,
                    y: this.y,
                };
            case 2:
                return {
                    y: this.y - 1,
                    x: this.x,
                };
            case 3:
                return {
                    x: this.x,
                    y: this.y + 1,
                };
        }
    }
    updatePos() {
        switch (this.dir) {
            case 0:
                this.x = this.x - 1;
                break;
            case 1:
                this.x = this.x + 1;
                break;
            case 2:
                this.y = this.y - 1;
                break;
            case 3:
                this.y = this.y + 1;
                break;
        }
    }
    updateFrame() {
        this.currFrame = (this.currFrame + 1) % this.frames;
        this.srcY = this.currFrame * this.height;
    }
    stopAnimation() {
        switch (this.dir) {
            case 0:
                return this.curX < this.target;
            case 1:
                return this.curX > this.target;
            case 2:
                return this.curY < this.target;
            case 3:
                return this.curY > this.target;
        }
    }
    getCords() {
        return { x: this.x, y: this.y };
    }
}

export default Sprite;
