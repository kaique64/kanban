import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import CreateTask from "src/application/task/create/CreateTask";
import BoardRepositoryWithPrismaORM from "src/infra/repositories/board/BoardRepositoryWithPrismaORM";
import TaskRepositoryWithPrismaORM from "src/infra/repositories/task/TaskRepositoryWithPrismaORM";

const prismaClient = new PrismaClient();
const taskRepository = new TaskRepositoryWithPrismaORM(prismaClient);
const boardRepository = new BoardRepositoryWithPrismaORM(prismaClient);
const createTaskUseCase = new CreateTask(taskRepository, boardRepository);

class TaskController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { board } = req.query;
        const { name, description, priority } = req.body;
        
        const task = await createTaskUseCase.execute({
            name,
            description,
            priority,
            boardId: board as string,
        });

        return res.status(200).json(task);
    }

}

export default TaskController;
