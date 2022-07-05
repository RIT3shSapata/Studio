export interface ObjectType {
    image: HTMLImageElement;
    width: number;
    height: number;
    x: number;
    y: number;
    srcX: number;
    srcY: number;
    context: CanvasRenderingContext2D;
    curX: number;
    curY: number;
    scale: number;
    frames: number;
    assetID: number;

    convertToCord(val: number): number;
    getPixelRatio(): number;
    draw(): void;
    erase(): void;
}
