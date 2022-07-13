export type json_costume = {
    name: string;
    bitmapResolution?: number;
    dataFormat: string;
    assetID: string;
    md5ext: string;
    width?: number;
    height?: number;
    rotationCenterX?: number;
    rotationCenterY?: number;
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
export type json_sprite_library = {
    name: string;
    tags: string[];
    isStage: boolean;
    costumes: json_costume[];
    sounds: json_sound[];
};
export type json_backdrop = {
    name: string;
    tags: string[];
    assetID: string;
    md5ext: string;
    dataFormat: string;
    rotationCenterX?: number;
    rotationCenterY?: number;
    bitmapResolution?: number;
};
