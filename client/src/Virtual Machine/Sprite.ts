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
    width: number;
    height: number;
    canvasHeight: number;
    canvasWidth: number;

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
        this.height = 0;
        this.width = 0;
        this.canvasHeight = 0;
        this.canvasWidth = 0;
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
    draw(): void {
        if (!this.context) return;
        const ratio = getPixelRatio(this.context);
        let origin_x = Math.ceil(this.canvasWidth / 2 + this.x);
        let origin_y = Math.ceil(this.canvasHeight / 2 + this.y * -1);
        const img = new Image();
        img.src = imagePath + this.costumes[this.currentCostume].md5ext;
        // img.style.transform = `rotate(${this.direction}deg)`;
        img.onload = () => {
            this.width = img.width;
            this.height = img.height;
            this.context?.save();
            this.context?.translate(
                origin_x + this.width / 2,
                origin_y + this.height / 2
            );
            this.context?.rotate(((this.direction - 90) * Math.PI) / 180);
            this.context?.drawImage(
                img,
                0,
                0,
                this.width * ratio,
                this.height * ratio
            );
            this.context?.restore();
        };
    }
    erase(): void {
        // this.context?.translate(-this.width / 2, -this.height / 2);
        this.context?.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }
    save(): string {
        return 'works';
    }
    move(steps: number): void {
        const x = Math.cos(((90 - this.direction) * Math.PI) / 180) * steps;
        const y = Math.sin(((90 - this.direction) * Math.PI) / 180) * steps;
        this.erase();
        this.x += Math.ceil(x);
        this.y += Math.ceil(y);
        console.log(this.x, this.y);
        this.draw();
        // this.init();
    }
    rotate(degrees: number): void {
        this.erase();
        console.log(degrees);
        this.direction = this.direction + degrees;
        this.context?.translate(this.width / 2, this.height / 2);
        this.context?.rotate(((this.direction - 90) * Math.PI) / 180);
        this.context?.translate(-this.width / 2, -this.height / 2);
        this.draw();
    }
}
