import CostumeType from '../types/CostumeType';

export default class Costume implements CostumeType {
    name: string;
    bitmapResolution?: number;
    dataFormat: string;
    assetID: string;
    md5ext: string;
    width?: number;
    height?: number;
    rotationCenterX?: number;
    rotationCenterY?: number;

    constructor(
        name: string,
        dataFormat: string,
        assetID: string,
        md5ext: string,
        width?: number,
        height?: number,
        bitmapResolution?: number,
        rotationCenterX?: number,
        rotationCenterY?: number
    ) {
        this.name = name;
        this.dataFormat = dataFormat;
        this.assetID = assetID;
        this.md5ext = md5ext;
        this.width = width ? width : 50;
        this.height = height ? height : 50;
        this.bitmapResolution = bitmapResolution;
        this.rotationCenterX = rotationCenterX ? rotationCenterX : 25;
        this.rotationCenterY = rotationCenterY ? rotationCenterY : 25;
    }

    save(): string {
        return JSON.stringify(this);
    }
}
