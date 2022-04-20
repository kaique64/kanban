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
    
    public async findByName(name: string): Promise<Task | undefined> {
        throw new Error("Method not implemented.");
    }
    
}

export default TaskRepositoryWithPrismaORM;
