import React, { useEffect, useRef, useState } from 'react';
import { fabric } from 'fabric';
import PaintState from '../../types/PaintState';
import usePaintStore from '../../Store/paintStore';
import shallow from 'zustand/shallow';
import VMState from '../../types/VMState';
import useVMStore from '../../Store/vmStore';

type Props = {};

const PaintEditor = (props: Props) => {
    const renderOnce = useRef<boolean>(false);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const [mousePressed, setMousePressed] = useState<boolean>(false);

    const { mode, currentSprite }: PaintState = usePaintStore(
        (state) => ({
            ...state,
        }),
        shallow
    );

    const { vm }: VMState = useVMStore((state) => ({ ...state }), shallow);

    const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
    useEffect(() => {
        if (renderOnce.current) return;
        renderOnce.current = true;
        const canvas = new fabric.Canvas(canvasRef.current, {
            backgroundColor: '#ffffff',
        });
        setCanvas(canvas);
    }, []);

    useEffect(() => {
        if (!canvas) return;
        console.log('works');
        const sprite = vm.sprites[currentSprite];
        const url = '/assets/' + sprite.costumes[sprite.currentCostume].md5ext;
        fabric.Image.fromURL(url, (img) => {
            console.log(url);
            canvas.add(img);
            canvas.renderAll();
        });
    }, [canvas]);

    useEffect(() => {
        if (!canvas) return;
        canvas.on('mouse:down', (event) => {
            if (mousePressed && mode === 'resize') {
                canvas.setCursor('grab');
                canvas.renderAll();
                const mEvent = event.e;
                const delta = new fabric.Point(
                    mEvent.movementX,
                    mEvent.movementY
                );
                canvas.relativePan(delta);
            }
        });
        canvas.on('mouse:down', (event) => {
            setMousePressed(true);
            if (mode === 'resize') {
                canvas.setCursor('grab');
                canvas.renderAll();
            }
        });
        canvas.on('mouse:up', (event) => {
            setMousePressed(false);
            canvas.setCursor('default');
            canvas.renderAll();
        });
    }, [mode]);

    useEffect(() => {
        if (!canvas) return;
        const sprite = vm.sprites[currentSprite];
        const url = '/assets/' + sprite.costumes[sprite.currentCostume].md5ext;
        console.log(url);
        fabric.Image.fromURL(url, (img) => {
            canvas.add(img);
            canvas.renderAll();
        });
        console.log(vm.sprites[currentSprite]);
    }, [currentSprite]);

    return (
        <div className='bg-emerald-300 w-full h-full flex justify-center'>
            <canvas className='border-4 border-slate-500 w-4/5 h-3/4 mt-10'></canvas>
        </div>
    );
};

export default PaintEditor;
