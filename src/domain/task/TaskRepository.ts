import Task from './Task';

interface TaskRepository {

    create(task: Task): void;
    
    findById(id: string): Task;

}

export default TaskRepository;