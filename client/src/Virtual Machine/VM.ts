import VMType from '../types/VMType';
import SpriteType from '../types/SpriteType';
import { actionType } from '../GameEngine/types/GameType';
import CanvasComponent from '../Components/CanvasComponent/CanvasComponent';
import { createElement, ReactElement } from 'react';

export default class VM implements VMType {
    sprites;
    blocks;
    queue;

    constructor() {
        this.sprites = new Array<SpriteType>();
        this.blocks = '';
        this.queue = new Array<actionType>();
    }
    addSprite(sprite: SpriteType) {
        this.sprites.push(sprite);
    }
    initVM(): ReactElement[] {
        const canvas = new Array<ReactElement>();
        this.sprites.forEach(async (sprite: SpriteType) => {
            canvas.push(
                createElement(CanvasComponent, {
                    sprite,
                    key: sprite.spriteID,
                })
            );
        });
        return canvas;
    }
    addInstructions(spriteID: number, code: string) {
        const instructions = code.split('\n');
        const action: actionType = {
            spriteID,
            instructions,
        };
        this.queue.push(action);
    }
    updateBackdrop(backdropID: number): void {
        console.log(backdropID);
    }
    execute(): void {
        this.queue.forEach((action: actionType) => {
            const { spriteID, instructions } = action;
            const sprite = this.getSprite(spriteID);
            if (!sprite) {
                console.log('sprite not found');
                return;
            }
            instructions.pop();
            instructions.forEach((instruction: string) => {
                const [command, ...args] = instruction.split(',');
                switch (command) {
                    case 'move':
                        const steps: number = parseInt(args[0]);
                        sprite.move(steps);
                        break;
                    case 'turn':
                        const degrees: number = parseInt(args[0]);
                        sprite.rotate(degrees);
                        break;
                    default:
                        console.log(command);
                }
            });
        });
    }
    getSprite(spriteID: number): SpriteType | undefined {
        return this.sprites.find((sprite: SpriteType) => {
            return sprite.spriteID === spriteID;
        });
    }
    save(): string {
        return 'works';
    }
}
