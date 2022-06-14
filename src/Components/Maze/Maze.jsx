import { useRef, useEffect, useState } from 'react';
import { maze1, maze2 } from './maze_map';
import sprite from './sprite.png';

const getPixelRatio = (context) => {
    var backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const convertToCord = (n) => {
    return n * 150 + 10;
};

const BLOCK_LENGHT = 148;
const BLOCK_WIDHT = 148;

const SPRITE_SHEET_WIDTH = 864;
const SPRITE_SHEET_HEIGHT = 280;
const TRACK_RIGHT = 0;
const TRACK_LEFT = 1;
const COLS = 8;
const ROWS = 2;
const FRAMECOUNT = 8;
const WIDTH = SPRITE_SHEET_WIDTH / COLS;
const HEIGHT = SPRITE_SHEET_HEIGHT / ROWS;

const updateFrame = (curFrame, srcX, srcY, right) => {
    curFrame.current = (curFrame.current + 1) % FRAMECOUNT;
    srcX.current = curFrame.current * WIDTH;
    if (right) {
        srcY.current = TRACK_RIGHT * HEIGHT;
    } else {
        srcY.current = TRACK_LEFT * HEIGHT;
    }
};
const canMove = (maze, x, y) => {
    return maze[y][x] !== '#';
};

const didWin = (maze, x, y) => {
    return maze[y][x] === '!';
};
const Maze = ({ code, run, setRun }) => {
    const canvasRef = useRef(null);
    //to store the id generated by requestAnimationFrame
    const requestIDRef = useRef(0);
    const renderOnce = useRef(false);
    //for animating the sprite
    const sprite_x_cord = useRef(0);
    const sprite_y_cord = useRef(0);

    //sprite character
    const character = new Image();
    character.src = sprite;
    const curFrame = useRef(1);
    const srcX = useRef(0);
    const srcY = useRef(0);
    const sprite_x = useRef(0);
    const sprite_y = useRef(0);

    const [maze, setMaze] = useState(maze1);

    //Rendering the maze
    useEffect(() => {
        if (renderOnce.current) return;
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        const canvasEle = canvas ? canvas : document.createElement('canvas');
        let width = getComputedStyle(canvasEle)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvasEle)
            .getPropertyValue('height')
            .slice(0, -2);

        if (canvas) {
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }

        const renderMaze = (context) => {
            if (!context) return;
            for (let i = 0; i < maze.length; i++) {
                for (let j = 0; j < maze[i].length; j++) {
                    const x = convertToCord(j);
                    const y = convertToCord(i);
                    switch (maze[i][j]) {
                        case '#':
                            context.fillStyle = '#000';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                        case '.':
                            context.fillStyle = '#fff';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                        case '_':
                            context.drawImage(
                                character,
                                srcX.current,
                                srcY.current,
                                WIDTH,
                                HEIGHT,
                                x,
                                y,
                                WIDTH,
                                HEIGHT
                            );
                            // context.fillStyle = 'blue';
                            // context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            sprite_x.current = j;
                            sprite_y.current = i;
                            break;
                        case '!':
                            context.fillStyle = 'green';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                    }
                }
            }
        };

        renderMaze(context);

        return () => {
            cancelAnimationFrame(requestIDRef.current);
        };
    }, []);

    const changeMaze = () => {
        if (maze === maze1) {
            setMaze(maze2);
        }

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        const canvasEle = canvas ? canvas : document.createElement('canvas');
        let width = getComputedStyle(canvasEle)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvasEle)
            .getPropertyValue('height')
            .slice(0, -2);

        if (canvas) {
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        const renderMaze = (context) => {
            if (!context) return;
            for (let i = 0; i < maze.length; i++) {
                for (let j = 0; j < maze[i].length; j++) {
                    const x = convertToCord(j);
                    const y = convertToCord(i);
                    switch (maze[i][j]) {
                        case '#':
                            context.fillStyle = '#000';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                        case '.':
                            context.fillStyle = '#fff';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                        case '_':
                            context.drawImage(
                                character,
                                srcX.current,
                                srcY.current,
                                WIDTH,
                                HEIGHT,
                                x,
                                y,
                                WIDTH,
                                HEIGHT
                            );
                            // context.fillStyle = 'blue';
                            // context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            sprite_x.current = j;
                            sprite_y.current = i;
                            break;
                        case '!':
                            context.fillStyle = 'green';
                            context.fillRect(x, y, BLOCK_LENGHT, BLOCK_WIDHT);
                            break;
                    }
                }
            }
        };

        renderMaze(context);
    };
    const moveRight = () => {
        return new Promise((resolve, reject) => {
            if (!canMove(maze, sprite_x.current + 1, sprite_y.current)) {
                alert('cannot move right');
                reject();
                return;
            }
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            sprite_x_cord.current = convertToCord(sprite_x.current);
            sprite_y_cord.current = convertToCord(sprite_y.current);
            const target = convertToCord(sprite_x.current + 1);
            const move = () => {
                if (sprite_x_cord.current > target) {
                    resolve();
                    return;
                }
                requestIDRef.current = requestAnimationFrame(move);
                if (!context) return;
                if (sprite_x_cord.current % 5 === 0) {
                    updateFrame(curFrame, srcX, srcY, true);
                }
                context.clearRect(
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    BLOCK_LENGHT,
                    BLOCK_WIDHT
                );

                sprite_x_cord.current += 1;

                context.drawImage(
                    character,
                    srcX.current,
                    srcY.current,
                    WIDTH,
                    HEIGHT,
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    WIDTH,
                    HEIGHT
                );
            };
            sprite_x.current += 1;
            move();
            if (didWin(maze, sprite_x.current, sprite_y.current)) {
                alert('You won');
            }
        });
    };

    const moveLeft = () => {
        return new Promise((resolve, reject) => {
            if (!canMove(maze, sprite_x.current - 1, sprite_y.current)) {
                alert('cannot move left');
                reject();
                return;
            }
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            sprite_x_cord.current = convertToCord(sprite_x.current);
            sprite_y_cord.current = convertToCord(sprite_y.current);
            const target = convertToCord(sprite_x.current - 1);
            const move = () => {
                if (sprite_x_cord.current < target) {
                    resolve();
                    return;
                }
                requestIDRef.current = requestAnimationFrame(move);
                if (!context) return;
                if (sprite_x_cord.current % 5 === 0) {
                    updateFrame(curFrame, srcX, srcY, false);
                }
                context.clearRect(
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    BLOCK_LENGHT,
                    BLOCK_WIDHT
                );

                sprite_x_cord.current -= 1;

                context.drawImage(
                    character,
                    srcX.current,
                    srcY.current,
                    WIDTH,
                    HEIGHT,
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    WIDTH,
                    HEIGHT
                );
            };
            sprite_x.current -= 1;
            move();
            if (didWin(maze, sprite_x.current, sprite_y.current)) {
                alert('You won');
            }
        });
    };

    const moveDown = () => {
        return new Promise((resolve, reject) => {
            if (!canMove(maze, sprite_x.current, sprite_y.current + 1)) {
                alert('cannot move down');
                reject();
                return;
            }
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            sprite_x_cord.current = convertToCord(sprite_x.current);
            sprite_y_cord.current = convertToCord(sprite_y.current);
            const target = convertToCord(sprite_y.current + 1);
            const move = () => {
                if (sprite_y_cord.current > target) {
                    resolve();
                    return;
                }
                requestIDRef.current = requestAnimationFrame(move);
                if (sprite_y_cord.current % 5 === 0) {
                    updateFrame(curFrame, srcX, srcY, true);
                }

                if (!context) return;

                context.clearRect(
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    BLOCK_LENGHT,
                    BLOCK_WIDHT
                );
                sprite_y_cord.current += 1;

                context.drawImage(
                    character,
                    srcX.current,
                    srcY.current,
                    WIDTH,
                    HEIGHT,
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    WIDTH,
                    HEIGHT
                );
            };
            sprite_y.current += 1;
            move();
            if (didWin(maze, sprite_x.current, sprite_y.current)) {
                alert('You won');
            }
        });
    };

    const moveUp = () => {
        return new Promise((resolve, reject) => {
            if (!canMove(maze, sprite_x.current, sprite_y.current - 1)) {
                alert('cannot move up');
                reject();
                return;
            }
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            sprite_x_cord.current = convertToCord(sprite_x.current);
            sprite_y_cord.current = convertToCord(sprite_y.current);
            const target = convertToCord(sprite_y.current - 1);
            const move = () => {
                if (sprite_y_cord.current < target) {
                    resolve();
                    return;
                }
                requestIDRef.current = requestAnimationFrame(move);
                if (!context) return;

                if (sprite_y_cord.current % 5 === 0) {
                    updateFrame(curFrame, srcX, srcY, false);
                }
                context.clearRect(
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    BLOCK_LENGHT,
                    BLOCK_WIDHT
                );

                sprite_y_cord.current -= 1;

                context.drawImage(
                    character,
                    srcX.current,
                    srcY.current,
                    WIDTH,
                    HEIGHT,
                    sprite_x_cord.current,
                    sprite_y_cord.current,
                    WIDTH,
                    HEIGHT
                );
            };
            sprite_y.current -= 1;
            move();
            if (didWin(maze, sprite_x.current, sprite_y.current)) {
                alert('You won');
            }
        });
    };

    useEffect(() => {
        if (run) {
            console.log(code.current);
            const instructions = code.current.split('\n');
            if (instructions.includes('not_connected')) {
                console.log('connect all blocks');
                alert('connect all blocks');
                code.current = '';
            }
            const animate = async () => {
                for (var idx = 0; idx < instructions.length; idx++) {
                    var instruction = instructions[idx];
                    switch (instruction) {
                        case 'move_up':
                            await moveUp();
                            break;
                        case 'move_down':
                            await moveDown();
                            break;
                        case 'move_left':
                            await moveLeft();
                            break;
                        case 'move_right':
                            await moveRight();
                            break;
                        default:
                            console.log('maze complete');
                    }
                }
            };
            // console.log(ins);
            animate();
            setRun(false);
        }
    }, [code, run]);
    return (
        <div className="p-5 flex flex-col justify-around w-3/4 h-screen">
            <canvas
                ref={canvasRef}
                className="w-full h-3/4 border-8 border-slate-900"></canvas>
            <div className="flex justify-between px-5 pt-2">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={moveUp}>
                    up
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={moveDown}>
                    down
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={moveLeft}>
                    left
                </button>
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={moveRight}>
                    right
                </button>
            </div>
        </div>
    );
};

export default Maze;
