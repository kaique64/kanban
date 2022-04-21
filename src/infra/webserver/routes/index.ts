import { Router } from "express";
import boardRoutes from "../../http/board/routes/board.routes";

const routes = Router();

routes.use('/board', boardRoutes);

export default routes;
