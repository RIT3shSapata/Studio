export default interface SoundType {
    name: string;
    assetID: string;
    format: string;
    md5ext: string;
    save(): string;
}
