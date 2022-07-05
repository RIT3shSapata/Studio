import Object from './Object';

/* 
VLAUES OF DIR
0 = left
1 = right
2 = up
3 = down
*/

const FRAMEUPDATE = 25;

class Sprite extends Object {
    constructor(
        image,
        width,
        height,
        x,
        y,
        srcX,
        srcY,
        context,
        scale,
        dir,
        frames,
        spriteID
    ) {
        super(image, width, height, x, y, srcX, srcY, context, scale, spriteID);
        this.dir = dir;
        this.frames = frames;
        this.currFrame = 0;
        this.requestID = null;
        this.target = 0;
        this.changeX = 0;
        this.changeY = 0;
        this.spriteID = spriteID;
    }
    updateDir(dir) {
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

    move() {
        //TODO: Perform a check before moving the sprite
        let target = 0;
        let changeX = 0;
        let changeY = 0;
        switch (this.dir) {
            case 0:
                target = this.convertToCord(this.x - 1);
                changeX = -1;
                break;
            case 1:
                target = this.convertToCord(this.x + 1);
                changeX = 1;
                break;
            case 2:
                target = this.convertToCord(this.y - 1);
                changeY = -1;
                break;
            case 3:
                target = this.convertToCord(this.y + 1);
                changeY = 1;
                break;
        }
    }
    getCords() {
        return { x: this.x, y: this.y };
    }
}

export default Sprite;
