import Task from './Task';

interface ITaskRepository {

    create(task: Task): void;
    
    findByName(name: string): Task;

}

export default ITaskRepository;