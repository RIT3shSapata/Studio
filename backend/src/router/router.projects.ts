import { Router } from 'express';
import {
    addProject,
    getAllProjects,
    getProjects,
    getProject,
} from '../controllers/controller.project';

const router = Router();

router.post('/project', getProjects);
router.post('/getProject', getProject);
router.post('/addProject', addProject);
router.get('/project', getAllProjects);

export default router;
