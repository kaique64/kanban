import { Request, Response } from "express";
import BoardNotFound from "../../../../domain/board/BoardNotFound";
import CreateTask from "../../../../application/task/create/CreateTask";
import BoardRepositoryWithPrismaORM from "../../../../infra/repositories/board/BoardRepositoryWithPrismaORM";
import TaskRepositoryWithPrismaORM from "../../../../infra/repositories/task/TaskRepositoryWithPrismaORM";
import EmptyBoard from "../../../../domain/board/EmptyBoard";
import ListTasksByBoard from "../../../../application/task/list-tasks-by-board/ListTasksByBoard";

const taskRepository = new TaskRepositoryWithPrismaORM();
const boardRepository = new BoardRepositoryWithPrismaORM();
const createTaskUseCase = new CreateTask(taskRepository, boardRepository);
const listTaskByBoardUseCase = new ListTasksByBoard(taskRepository, boardRepository);

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
                    success: false,
                    error: true,
                    message: error.message
                });
            }
        } finally {
            if (task !== undefined && task !== null) {
                return res.status(201).json(
                    {
                        status: 201,
                        body: {
                            name: task.name,
                            description: task.description,
                            priority: task.priority,
                            boardId: task.boardId,
                        },
                        success: true,
                        error: false,
                    },
                );
            }
        }
    }

    public async listTasksByBoard(req: Request, res: Response): Promise<Response | undefined> {
        let tasks;
        const { board } = req.query;

        try {
            tasks = await listTaskByBoardUseCase.execute(board as string);
        } catch (error) {
            if (error instanceof BoardNotFound) {
                return res.status(404).json({
                    statusCode: 404,
                    success: false,
                    error: true,
                    message: error.message,
                });
            }
            
            if (error instanceof EmptyBoard) {
                return res.status(400).json({
                    statusCode: 400,
                    success: false,
                    error: true,
                    message: error.message
                });
            }
        } finally {
            if (tasks !== undefined && tasks !== null) {
                return res.status(200).json(
                    {
                        status: 200,
                        body: { tasks },
                        success: true,
                        error: false,
                    },
                );    
            }
        }
    }

}

export default TaskController;
