import ITaskRepository from '../../../domain/task/ITaskRepository'
import Task from '../../../domain/task/Task';
import TaskDTO from '../../../domain/task/TaskDTO';
import { v4 as uuid } from 'uuid';

class TaskRepositoryInMemory implements ITaskRepository {

    private tasks: Task[] = [];

    public async create(data: TaskDTO): Promise<Task> {
        const task = new Task(data.name, data.description, data.priority, data.boardId, uuid());
        
        this.tasks.push(task);

        return task;
    }
    
    public async findById(id: string): Promise<Task | undefined> {
        const task = this.tasks.find((task) => task.id === id);
        
        return task;
    }

}

export default TaskRepositoryInMemory;