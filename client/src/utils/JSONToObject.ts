import {
    json_costume,
    json_obj,
    json_sound,
    json_sprite,
} from '../types/JSONTypes';
import SpriteType from '../types/SpriteType';
import VMType from '../types/VMType';
import Costume from '../Virtual Machine/Costume';
import Sound from '../Virtual Machine/Sound';
import Sprite from '../Virtual Machine/Sprite';
import VM from '../Virtual Machine/VM';

const JSONToObject: (json: string) => VMType = (json) => {
    const { sprites, blocks }: json_obj = JSON.parse(json);
    const newVM: VMType = new VM();
    newVM.blocks = blocks;
    sprites.forEach((sprite: json_sprite) => {
        const { costumes, sounds } = sprite;
        const newSprite: SpriteType = new Sprite(
            sprite.name,
            sprite.layerOrder
        );
        newSprite.loadSprite(
            sprite.isStage,
            sprite.currentCostume,
            sprite.volume,
            sprite.visible,
            sprite.x,
            sprite.y,
            sprite.direction,
            sprite.size
        );
        costumes.forEach((costume: json_costume) => {
            const newCostume = new Costume(
                costume.name,
                costume.dataFormat,
                costume.assetID,
                costume.md5ext,
                costume?.width,
                costume?.height
            );
            newSprite.addCostume(newCostume);
        });
        sounds.forEach((sound: json_sound) => {
            const newSound = new Sound(
                sound.name,
                sound.assetID,
                sound.format,
                sound.md5ext
            );
            newSprite.addSound(newSound);
        });
        newVM.addSprite(newSprite);
    });
    return newVM;
};

export default JSONToObject;
