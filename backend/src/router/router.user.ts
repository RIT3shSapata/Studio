import { Router } from 'express';
import { getUser, signUp, signIn } from '../controllers/controller.user';

const router = Router();

router.get('/user', getUser);
router.post('/user/signup', signUp);
router.post('/user/signin', signIn);

export default router;
