import ITaskRepository from '../../domain/task/ITaskRepository'
import Task from '../../domain/task/Task';

class TaskRepositoryInMemory implements ITaskRepository {

    private tasks: Task[] = [];

    public create(task: Task): void {
        this.tasks.push(task);
    }
    
    public findByName(name: string): Task {
        return this.tasks.find((task) => task.getName() === name);
    }

}

export default TaskRepositoryInMemory;