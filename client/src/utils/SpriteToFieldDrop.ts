import CostumeType from '../types/CostumeType';
import SpriteType from '../types/SpriteType';

const SpriteToFieldDrop: (sprites: SpriteType[]) => any = (sprites) => {
    return sprites.map((sprite: SpriteType, idx: number) => {
        const costume: CostumeType = sprite.costumes[0];
        return [
            {
                src: `assets/${costume.md5ext}`,
                width: 15,
                height: 15,
                alt: '*',
            },
            `${idx}`,
        ];
    });
};
export default SpriteToFieldDrop;
