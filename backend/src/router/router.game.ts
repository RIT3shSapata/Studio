import { Router } from 'express';
import { createGame, getGame, saveGame } from '../controllers/controller.game';

const router = Router();

router.post('/createGame', createGame);
router.post('/saveGame', saveGame);
router.post('/getGame', getGame);

export default router;
