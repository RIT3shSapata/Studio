import CostumeType from '../../types/CostumeType';
import {
    json_costume,
    json_sound,
    json_sprite_library,
} from '../../types/JSONTypes';
import SoundType from '../../types/SoundType';
import SpriteType from '../../types/SpriteType';
import Costume from '../Costume';
import Sound from '../Sound';
import Sprite from '../Sprite';

const JSONtoSprite: (
    sprite: json_sprite_library,
    layerOrder: number
) => SpriteType = (sprite, layerOrder) => {
    const {
        costumes,
        sounds,
    }: { costumes: json_costume[]; sounds: json_sound[] } = sprite;
    const newSprite: SpriteType = new Sprite(sprite.name, layerOrder);
    costumes.forEach((costume: json_costume) => {
        const newCostume: CostumeType = new Costume(
            costume.name,
            costume.dataFormat,
            costume.assetID,
            costume.md5ext,
            costume?.width,
            costume?.height,
            costume?.bitmapResolution,
            costume?.rotationCenterX,
            costume?.rotationCenterY
        );
        newSprite.addCostume(newCostume);
    });
    sounds.forEach((sound: json_sound) => {
        const newSound: SoundType = new Sound(
            sound.name,
            sound.assetID,
            sound.format,
            sound.md5ext
        );
        newSprite.addSound(newSound);
    });
    return newSprite;
};

export default JSONtoSprite;
