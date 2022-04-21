import { Router } from "express";
import taskRoutes from "../../../infra/http/task/routes/task.routes";
import boardRoutes from "../../http/board/routes/board.routes";

const routes = Router();

routes.use('/board', boardRoutes);
routes.use('/task', taskRoutes);

export default routes;
