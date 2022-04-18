import Task from '../../../domain/task/Task';
import TPriority from '../../../domain/task/TPriority';

class CreateTaskDTO {

    private name: string;
    private description: string;
    private priority: TPriority;

    constructor(name: string, description: string, priority: TPriority) {
        this.name = name;
        this.description = description;
        this.priority = priority; 
    }

    public createTask(): Task {
        const task: Task = new Task(
            this.name,
            this.description,
            this.priority,
        );

        return task;
    }

}

export default CreateTaskDTO;