import { PrismaClient } from "@prisma/client";
import ITaskRepository from "../../../domain/task/ITaskRepository";
import Task from "../../../domain/task/Task";
import TaskDTO from "../../../domain/task/TaskDTO";

class TaskRepositoryWithPrismaORM implements ITaskRepository {

    constructor(
        private prismaClient: PrismaClient
    ) {}

    public async create(data: TaskDTO): Promise<void> {
        await this.prismaClient.task.create({
            data: {
                name: data.name,
                description: data.description,
                priority: data.priority,
            }
        });
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
