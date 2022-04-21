import { Router } from "express";
import boardRoutes from "../../http/board/routes/board.routes";

const routes = Router();

routes.post('/board', boardRoutes);

export default routes;
