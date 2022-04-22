import { Request, Response } from "express";
import BoardNotFound from "../../../../domain/board/BoardNotFound";
import CreateTask from "../../../../application/task/create/CreateTask";
import BoardRepositoryWithPrismaORM from "../../../../infra/repositories/board/BoardRepositoryWithPrismaORM";
import TaskRepositoryWithPrismaORM from "../../../../infra/repositories/task/TaskRepositoryWithPrismaORM";

const taskRepository = new TaskRepositoryWithPrismaORM();
const boardRepository = new BoardRepositoryWithPrismaORM();
const createTaskUseCase = new CreateTask(taskRepository, boardRepository);

class TaskController {

    public async create(req: Request, res: Response): Promise<Response | undefined> {
        let task;

        try {
            const { board } = req.query;
            const { name, description, priority } = req.body;

            task = await createTaskUseCase.execute({
                name,
                description,
                priority,
                boardId: board as string,
            });
        } catch (error) {
            if (error instanceof BoardNotFound) {
                return res.status(404).json({
                    statusCode: 404,
                    message: error.message
                });
            }
        } finally {
            if (task !== undefined && task !== null) {
                return res.status(201).json({
                    name: task.name,
                    description: task.description,
                    priority: task.priority,
                    boardId: task.boardId,
                });
            }
        }
    }

}

export default TaskController;
