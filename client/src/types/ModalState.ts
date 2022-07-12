export default interface ModalState {
    costumeModal: boolean;
    spriteModal: boolean;
    backgroundModal: boolean;
    toggelCostumeModal: () => void;
    toggelSpriteModal: () => void;
    toggelBackgroundModal: () => void;
}
