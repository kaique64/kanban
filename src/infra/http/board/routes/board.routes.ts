import { Router } from "express";
import BoardController from "../controllers/BoardController";

const boardRoutes = Router();
const boardController = new BoardController();

boardRoutes.post('/create', boardController.create);

export default boardRoutes;
