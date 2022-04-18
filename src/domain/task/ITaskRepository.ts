import Task from './Task';

interface ITaskRepository {

    create(task: Task): void;
    
    findById(id: string): Task;

}

export default ITaskRepository;