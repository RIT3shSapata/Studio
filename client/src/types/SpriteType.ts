import CostumeType from './CostumeType';
import SoundType from './SoundType';

export default interface SpriteType {
    name: string;
    blocks: string;
    currentCostume: number;
    costumes: CostumeType[];
    sounds: SoundType[];
    size: number;
    volume: number;
    layerOrder: number;
    visible: boolean;
    x: number;
    y: number;
    direction: number;
    context: CanvasRenderingContext2D;
    spriteID: number;
    addCostume(costume: CostumeType): void;
    addSound(sound: SoundType): void;
    draw(): void;
    erase(): void;
    save(): string;
}
