export default interface NavbarState {
    screen: 'editor' | 'design';
    setScreen: (screen: 'editor' | 'design') => void;
}
