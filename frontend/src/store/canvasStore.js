import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

const useCanvasStore = create(
    devtools((set) => ({
        canvas: [],
        addCanvas: (canvasRef) => {
            set((state) => ({
                canvas: [...state.canvas, canvasRef],
            }));
        },
        animateSprite: (id) => {
            set((state) => ({
                canvas: state.canvas.map((can) => {
                    if (can.id === id) {
                        can.move = true;
                    }
                    return can;
                }),
            }));
        },
        stopAnimation: (id) => {
            set((state) => ({
                canvas: state.canvas.map((can) => {
                    if (can.id === id) {
                        can.move = false;
                    }
                    return can;
                }),
            }));
        },
    }))
);

export default useCanvasStore;
