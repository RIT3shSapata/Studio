export default interface CostumeType {
    name: string;
    bitmapResolution?: number;
    dataFormat: string;
    assetID: string;
    md5ext: string;
    width?: number;
    height?: number;
    rotationCenterX?: number;
    rotationCenterY?: number;
    save(): string;
}
