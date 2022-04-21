import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.post('/create', taskController.create);

export default taskRoutes;
