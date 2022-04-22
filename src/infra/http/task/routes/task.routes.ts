import { celebrate, Joi, Segments } from 'celebrate';
import { Router } from 'express';
import TaskController from '../controllers/TaskController';

const taskRoutes = Router();
const taskController = new TaskController();

taskRoutes.post(
    '/create',
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            description: Joi.string().required(),
            priority: Joi.equal('High', 'Medium', 'Low').required(),
        }),
        [Segments.QUERY]: Joi.object().keys({
            board: Joi.string().required(),
        }),
    }),
    taskController.create
);
taskRoutes.get(
    '/list',
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            board: Joi.string().required(),
        }),
    }),
    taskController.listTasksByBoard
)

export default taskRoutes;
