import CreateTaskDTO from './CreateTaskDTO';
import Task from '../../../domain/task/Task';
import ITaskRepository from '../../../domain/task/ITaskRepository';

class CreateTask {
    
    private readonly taskRepository: ITaskRepository;

    constructor(taskRepositoryInMemory: ITaskRepository) {
        this.taskRepository = taskRepositoryInMemory;
    }

    public execute(data: CreateTaskDTO): void {
        const newTask: Task = data.createTask();

        this.taskRepository.create(newTask);
    }

}

export default CreateTask;