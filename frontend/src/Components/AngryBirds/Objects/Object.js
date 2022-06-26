const GRID_SIZE = 64;
export default class Object {
    constructor(image, width, height, x, y, srcX, srcY, context, scale) {
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
        this.frames = this.frames || 1;
    }

    convertToCord(val) {
        return val * GRID_SIZE;
    }

    draw() {
        this.context.drawImage(
            this.image,
            this.srcX,
            this.srcY,
            this.width,
            this.height,
            this.curX,
            this.curY,
            this.width * this.scale,
            this.height * this.scale
        );
    }
    erase() {
        this.context.clearRect(
            this.curX,
            this.curY,
            this.width * this.scale,
            this.height * this.scale
        );
    }
}
