import ITaskRepository from '../../../domain/task/ITaskRepository'
import Task from '../../../domain/task/Task';

class TaskRepositoryInMemory implements ITaskRepository {

    private tasks: Task[] = [];

    public async create(task: Task): Promise<void> {
        this.tasks.push(task);
    }
    
    public async findByName(name: string): Promise<Task | undefined> {
        const task = this.tasks.find((task) => task.getName() === name);
        
        return task;
    }

}

export default TaskRepositoryInMemory;