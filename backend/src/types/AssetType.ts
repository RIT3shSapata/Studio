export interface AssetType {
    name: string;
    type: 'background' | 'sprite' | 'goal' | 'empty' | 'object';
    height: number;
    width: number;
    src: string;
    srcX: number;
    srcY: number;
    scale: number;
}

export interface GameAssetsType {
    [key: number]: AssetType;
}

export type cords = {
    x: number;
    y: number;
}[];

export interface AssetCords {
    [key: number]: cords;
}
