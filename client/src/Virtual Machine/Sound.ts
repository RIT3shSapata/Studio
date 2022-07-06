import SoundType from '../types/SoundType';

export default class Sound implements SoundType {
    constructor(name: string, assetID: string, format: string, md5ext: string) {
        this.name = name;
        this.assetID = assetID;
        this.format = format;
        this.md5ext = md5ext;
    }

    name: string;
    assetID: string;
    format: string;
    md5ext: string;

    save(): string {
        return JSON.stringify(this);
    }
}
