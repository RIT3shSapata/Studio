import CostumeType from '../types/CostumeType';
import { json_backdrop } from '../types/JSONTypes';
import Costume from '../Virtual Machine/Costume';

const JSONToAsset: (backdrop: json_backdrop) => CostumeType = (backdrop) => {
    const newCostume: CostumeType = new Costume(
        backdrop.name,
        backdrop.dataFormat,
        backdrop.assetID,
        backdrop.md5ext,
        backdrop?.bitmapResolution,
        backdrop?.rotationCenterX,
        backdrop?.rotationCenterY
    );
    return newCostume;
};

export default JSONToAsset;
