export default interface NavbarState {
    screen: 'editor' | 'costume';
    setScreen: (screen: 'editor' | 'costume') => void;
}
