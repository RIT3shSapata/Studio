class Game {
    constructor() {
        this.maze = [];
        this.sprites = [];
        this.queue = [];
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    addInstructions(spriteID, code) {
        const instructions = code.split('\n');
        if (instructions.includes('not_connected')) {
            alert('Connect all blocks');
        }
        this.queue.push({ spriteID, instructions });
    }
    run() {
        console.log(this.queue);
    }
}

export default Game;
