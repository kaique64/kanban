import Task from './Task';

interface ITaskRepository {

    create(task: Task): Promise<void>;
    
    findByName(name: string): Promise<Task | undefined>;

}

export default ITaskRepository;