import Task from '../../../domain/task/Task';
import ITaskRepository from '../../../domain/task/ITaskRepository';
import TPriority from '../../../domain/task/TPriority';
import TaskDTO from '../../../domain/task/TaskDTO';

class CreateTask {
    
    private readonly taskRepository: ITaskRepository;

    constructor(taskRepositoryInMemory: ITaskRepository) {
        this.taskRepository = taskRepositoryInMemory;
    }

    public async execute(data: TaskDTO): Promise<Task> {
        const task = await this.taskRepository.create({
            name: data.name,
            description: data.description,
            priority: data.priority as TPriority,
        });

        return task;
    }

}

export default CreateTask;