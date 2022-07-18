import React from 'react';
import PaintEditor from './PaintEditor';
import PaintMenu from './PaintMenu';
import PaintTools from './PaintTools';

type Props = {};

const SpritePaint = ({}: Props) => {
    return (
        <div className='w-full h-full flex flex-col'>
            <PaintMenu />
            <div className='flex w-full flex-1'>
                <PaintTools />
                <PaintEditor />
            </div>
        </div>
    );
};

export default SpritePaint;
