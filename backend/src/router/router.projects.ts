import { Router } from 'express';
import {
    addProject,
    getAllProjects,
    getProject,
} from '../controllers/controller.project';

const router = Router();

router.post('/project', getProject);
router.post('/addProject', addProject);
router.get('/project', getAllProjects);

export default router;
