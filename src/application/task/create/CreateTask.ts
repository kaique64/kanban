import CreateTaskDTO from './CreateTaskDTO';
import TaskRepositoryInMemory from '../../../infra/task/TaskRepositoryInMemory';
import Task from '../../../domain/task/Task';

class CreateTask {
    
    private readonly taskRepositoryInMemory: TaskRepositoryInMemory;

    constructor(taskRepositoryInMemory: TaskRepositoryInMemory) {
        this.taskRepositoryInMemory = taskRepositoryInMemory;
    }

    public execute(data: CreateTaskDTO): void {
        const newTask: Task = data.createTask();

        this.taskRepositoryInMemory.create(newTask);
    }

}

export default CreateTask;