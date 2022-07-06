import Game from '../../../GameEngine/Game';
import { GameType } from '../../../GameEngine/types/GameType';

export interface AngryBirdsGameType extends GameType {}

class AngryBirdsGame extends Game implements AngryBirdsGame {}

export default AngryBirdsGame;
