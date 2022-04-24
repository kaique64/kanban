import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import BoardController from "../controllers/BoardController";

const boardRoutes = Router();
const boardController = new BoardController();

boardRoutes.post(
    '/create', 
    celebrate({
        [Segments.BODY]: {
            name: Joi.string().required(),
        },
    }),
    boardController.create,
);
boardRoutes.get('/list', boardController.list);

export default boardRoutes;
