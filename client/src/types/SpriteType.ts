import CostumeType from './CostumeType';
import SoundType from './SoundType';

export default interface SpriteType {
    name: string;
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
    isStage: boolean;
    context?: CanvasRenderingContext2D;
    spriteID: number;
    addCostume(costume: CostumeType): void;
    addSound(sound: SoundType): void;
    addContext(context: CanvasRenderingContext2D): void;
    loadSprite(
        isStage: boolean,
        currentCostume: number,
        volume: number,
        visible: boolean,
        x: number,
        y: number,
        direction: number,
        size: number
    ): void;
    draw(): void;
    erase(): void;
    save(): string;
}
