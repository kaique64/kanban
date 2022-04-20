import ITaskRepository from '../../../domain/task/ITaskRepository'
import Task from '../../../domain/task/Task';
import TaskDTO from '../../../domain/task/TaskDTO';

class TaskRepositoryInMemory implements ITaskRepository {

    private tasks: Task[] = [];

    public async create(data: TaskDTO): Promise<void> {
        this.tasks.push(new Task(data.name, data.description, data.priority));
    }
    
    public async findByName(name: string): Promise<Task | undefined> {
        const task = this.tasks.find((task) => task.getName() === name);
        
        return task;
    }

}

export default TaskRepositoryInMemory;