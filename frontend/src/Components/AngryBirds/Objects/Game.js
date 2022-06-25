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
    run(spriteID) {
        let i;
        this.queue.forEach((item, index) => {
            if (item.spriteID === spriteID) {
                i = index;
            }
        });
        const action = this.queue.splice(i, 1)[0];
        return action.instructions;
    }
}

export default Game;
