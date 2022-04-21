import { PrismaClient } from "@prisma/client";
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
    
}

export default TaskRepositoryWithPrismaORM;
