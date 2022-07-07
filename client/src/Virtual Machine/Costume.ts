import CostumeType from '../types/CostumeType';

export default class Costume implements CostumeType {
    name: string;
    bitmapResolution?: number;
    dataFormat: string;
    assetID: string;
    md5ext: string;
    width?: number;
    height?: number;

    constructor(
        name: string,
        dataFormat: string,
        assetID: string,
        md5ext: string,
        width?: number,
        height?: number,
        bitmapResolution?: number
    ) {
        this.name = name;
        this.dataFormat = dataFormat;
        this.assetID = assetID;
        this.md5ext = md5ext;
        this.width = width;
        this.height = height;
        this.bitmapResolution = bitmapResolution;
    }

    save(): string {
        return JSON.stringify(this);
    }
}
