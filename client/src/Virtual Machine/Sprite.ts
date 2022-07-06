import CostumeType from '../types/CostumeType';
import SoundType from '../types/SoundType';
import SpriteType from '../types/SpriteType';

export default class Sprite implements SpriteType {
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

    constructor(
        name: string,
        layerOrder: number,
        context: CanvasRenderingContext2D
    ) {
        this.name = name;
        this.blocks = '';
        this.currentCostume = 0;
        this.costumes = new Array<CostumeType>();
        this.sounds = new Array<SoundType>();
        this.size = 100;
        this.volume = 100;
        this.layerOrder = layerOrder;
        this.visible = false;
        this.x = 0;
        this.y = 0;
        this.direction = 90;
        this.context = context;
        this.spriteID = Math.floor(100000 + Math.random() * 900000);
    }

    addCostume(costume: CostumeType): void {
        this.costumes.push(costume);
    }
    addSound(sound: SoundType): void {
        this.sounds.push(sound);
    }
    draw(): void {
        console.log('draw');
    }
    erase(): void {
        console.log('erase');
    }
    save(): string {
        return 'works';
    }
}
