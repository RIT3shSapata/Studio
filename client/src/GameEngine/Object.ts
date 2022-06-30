import { ObjectType } from '../types/ObjectType';
const GRID_SIZE = 50;
export default class Object implements ObjectType {
    image;
    width;
    height;
    x;
    y;
    srcX;
    srcY;
    context;
    curX;
    curY;
    scale;
    frames;

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
        frames: number
    ) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.srcX = srcX;
        this.srcY = srcY;
        this.context = context;
        this.curX = this.convertToCord(this.x);
        this.curY = this.convertToCord(this.y);
        this.scale = scale;

        // default num frames is 1
        this.frames = frames || 1;
    }

    convertToCord(val: number) {
        const ratio = this.getPixelRatio();
        return val * GRID_SIZE * ratio;
    }
    getPixelRatio() {
        var backingStore =
            //@ts-ignore
            this.context.backingStorePixelRatio ||
            //@ts-ignore
            this.context.webkitBackingStorePixelRatio ||
            //@ts-ignore
            this.context.mozBackingStorePixelRatio ||
            //@ts-ignore
            this.context.msBackingStorePixelRatio ||
            //@ts-ignore
            this.context.oBackingStorePixelRatio ||
            //@ts-ignore
            this.context.backingStorePixelRatio ||
            1;

        return (window.devicePixelRatio || 1) / backingStore;
    }

    draw() {
        const ratio = this.getPixelRatio();
        this.context.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.curX,
            this.curY,
            this.width * this.scale * ratio,
            this.height * this.scale * ratio
        );
    }
    erase() {
        const ratio = this.getPixelRatio();
        this.context.clearRect(
            this.curX,
            this.curY,
            this.width * this.scale * ratio,
            this.height * this.scale * ratio
        );
    }
}
