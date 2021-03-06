import { PrismaClient } from "@prisma/client";
import UpdateBoardTaskDTO from "src/domain/task/UpdateBoardTaskDTO";
import ITaskRepository from "../../../domain/task/ITaskRepository";
import Task from "../../../domain/task/Task";
import TaskDTO from "../../../domain/task/TaskDTO";

class TaskRepositoryWithPrismaORM implements ITaskRepository {

    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    public async create(data: TaskDTO): Promise<Task> {
        const task = await this.prismaClient.task.create({
            data: {
                name: data.name,
                description: data.description,
                priority: data.priority,
                boardId: data.boardId
            }
        });

        return task;
    }
    
    public async findById(id: string): Promise<Task | undefined> {
        const task = await this.prismaClient.task.findUnique({
            where: {
                id,
            },
        });

        if (!task) {
            return undefined;
        }

        return task;
    }
    
    public async listTaskByBoard(board_id: string): Promise<Task[]> {
        const tasksFoundByBoard = await this.prismaClient.task.findMany({
            where: {
                boardId: board_id
            },
            include: {
                board: true,
            },
        });

        return tasksFoundByBoard;
    }

    public async updateBoardTask(data: UpdateBoardTaskDTO): Promise<Task> {
        const updatedTask = await this.prismaClient.task.update({ where: { id: data.id }, data });

        return updatedTask;
    }

}

export default TaskRepositoryWithPrismaORM;
