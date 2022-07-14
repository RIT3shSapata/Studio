import CostumeType from '../types/CostumeType';

const BackdropField: (costumes: CostumeType[]) => string[][] = (costumes) => {
    return costumes.map((costume: CostumeType, idx: number) => {
        return [costume.name, `${idx}`];
    });
};

export default BackdropField;
