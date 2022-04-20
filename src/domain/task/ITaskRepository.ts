import Task from './Task';
import TaskDTO from './TaskDTO';

interface ITaskRepository {

    create(data: TaskDTO): Promise<void>;
    
    findByName(name: string): Promise<Task | undefined>;

}

export default ITaskRepository;