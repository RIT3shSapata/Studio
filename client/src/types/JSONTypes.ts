export type json_costume = {
    name: string;
    bitmapResolution?: number;
    dataFormat: string;
    assetID: string;
    md5ext: string;
    width?: number;
    height?: number;
};
export type json_sound = {
    name: string;
    assetID: string;
    format: string;
    md5ext: string;
};
export type json_sprite = {
    isStage: boolean;
    name: string;
    currentCostume: number;
    costumes: json_costume[];
    sounds: json_sound[];
    volume: number;
    layerOrder: number;
    visible: boolean;
    x: number;
    y: number;
    direction: number;
    size: number;
};
export type json_obj = {
    sprites: json_sprite[];
    blocks: string;
};
