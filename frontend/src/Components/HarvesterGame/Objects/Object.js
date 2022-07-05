const GRID_SIZE = 50;
export default class Object {
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
        assetID
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
        this.assetID = assetID;

        // default num frames is 1
        this.frames = this.frames || 1;
    }

    convertToCord(val) {
        const ratio = this.getPixelRatio();
        return val * GRID_SIZE * ratio;
    }
    getPixelRatio() {
        var backingStore =
            this.context.backingStorePixelRatio ||
            this.context.webkitBackingStorePixelRatio ||
            this.context.mozBackingStorePixelRatio ||
            this.context.msBackingStorePixelRatio ||
            this.context.oBackingStorePixelRatio ||
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
