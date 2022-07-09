import VMType from '../types/VMType';
import SpriteType from '../types/SpriteType';
import CanvasComponent from '../Components/CanvasComponent/CanvasComponent';
import { createElement, ReactElement } from 'react';
import ActionType from '../types/ActionType';

export default class VM implements VMType {
    sprites;
    blocks;
    queue;
    keyListener: any;

    constructor() {
        this.sprites = new Array<SpriteType>();
        this.blocks = '';
        this.queue = new Array<ActionType>();
        this.keyListener = {};
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
    addAllInstructions(code: string) {
        const instructions = code.split('\n');
        let spriteID = -1;
        let newIns: string[] = [];
        var eventType: 'start' | 'event' = 'start';
        console.log(instructions);
        instructions.forEach((instruction) => {
            if (instruction.length === 0) {
                const action: ActionType = {
                    spriteID,
                    instructions: newIns,
                    eventType,
                };
                this.queue.push(action);
            }
            const commands = instruction.split(';');
            commands.forEach((command) => {
                const [commandName, ...args] = command.split(',');
                if (commandName === 'start') {
                    var sprite_ind = parseInt(args[0]);
                    const sp = this.sprites[sprite_ind];
                    spriteID = sp.spriteID;
                    newIns = [];
                    eventType = 'start';
                } else if (commandName === 'start_key') {
                    var sprite_ind = parseInt(args[0]);
                    const sp = this.sprites[sprite_ind];
                    spriteID = sp.spriteID;
                    newIns = [];
                    eventType = 'event';
                } else {
                    newIns.push(command);
                }
            });
        });
    }
    updateBackdrop(backdropID: number): void {
        console.log(backdropID);
    }
    execute(spriteID: number, instructions: string[]): void {
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
                case 'goto':
                    const x: number = parseInt(args[0]);
                    const y: number = parseInt(args[1]);
                    sprite.goto(x, y);
                    break;
                case 'point':
                    const angle: number = parseInt(args[0]);
                    sprite.point(angle);
                    break;
                case 'change_x':
                    const dx: number = parseInt(args[0]);
                    sprite.change(dx, 0);
                    break;
                case 'change_y':
                    const dy: number = parseInt(args[0]);
                    sprite.change(0, dy);
                    break;
                case 'set_x':
                    const sx: number = parseInt(args[0]);
                    sprite.set(sx, sprite.y);
                    break;
                case 'set_y':
                    const sy: number = parseInt(args[0]);
                    sprite.set(sprite.x, sy);
                    break;
                default:
                    console.log(command);
            }
        });
    }

    executeStart(): void {
        this.queue.forEach((action: ActionType) => {
            const { spriteID, instructions, eventType }: ActionType = action;
            if (eventType === 'start') {
                this.execute(spriteID, instructions);
            }
        });
    }

    executeEvent(): void {
        this.queue.forEach((action: ActionType) => {
            const { spriteID, instructions, eventType }: ActionType = action;
            if (eventType === 'event') {
                this.execute(spriteID, instructions);
            }
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
    addKeyListner(key: string): void {
        if (!this.keyListener[key]) {
            this.keyListener[key] = true;
            document.addEventListener('keydown', (e: KeyboardEvent) => {
                if (e.code === key) {
                    const myEvent = new CustomEvent('start_event', {});
                    document.dispatchEvent(myEvent);
                }
            });
        }
    }
}
