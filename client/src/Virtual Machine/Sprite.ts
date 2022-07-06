import CostumeType from '../types/CostumeType';
import SoundType from '../types/SoundType';
import SpriteType from '../types/SpriteType';
import getPixelRatio from '../utils/GetPixelRatio';

const imagePath = '../assets/';

export default class Sprite implements SpriteType {
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
    context?: CanvasRenderingContext2D;
    spriteID: number;
    isStage: boolean;

    constructor(name: string, layerOrder: number) {
        this.name = name;
        this.currentCostume = 0;
        this.costumes = new Array<CostumeType>();
        this.sounds = new Array<SoundType>();
        this.isStage = false;
        this.size = 100;
        this.volume = 100;
        this.layerOrder = layerOrder;
        this.visible = false;
        this.x = 0;
        this.y = 0;
        this.direction = 90;
        this.spriteID = Math.floor(100000 + Math.random() * 900000);
    }

    loadSprite(
        isStage: boolean,
        currentCostume: number,
        volume: number,
        visible: boolean,
        x: number,
        y: number,
        direction: number,
        size: number
    ): void {
        this.currentCostume = currentCostume;
        this.volume = volume;
        this.visible = visible;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.size = size;
        this.isStage = isStage;
    }

    addCostume(costume: CostumeType): void {
        this.costumes.push(costume);
    }
    addSound(sound: SoundType): void {
        this.sounds.push(sound);
    }
    addContext(context: CanvasRenderingContext2D): void {
        this.context = context;
    }
    move(steps: number): void {
        const x = Math.cos(((90 - this.direction) * Math.PI) / 180) * steps;
        const y = Math.sin(((90 - this.direction) * Math.PI) / 180) * steps;
        console.log(Math.ceil(x), Math.ceil(y));
        this.erase();
        this.x += x;
        this.y += y;
        this.draw();
    }
    draw(): void {
        // if (!this.context) return;
        const ratio = getPixelRatio(this.context);
        const img = new Image();
        img.src = imagePath + this.costumes[this.currentCostume].md5ext;
        img.onload = () => {
            this.context?.drawImage(
                img,
                this.x,
                this.y,
                25 * ratio,
                25 * ratio
            );
        };
    }
    erase(): void {
        const ratio = getPixelRatio(this.context);
        this.context?.clearRect(this.x, this.y, 25 * ratio, 25 * ratio);
    }
    save(): string {
        return 'works';
    }
}
