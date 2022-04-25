import Task from './Task';
import TaskDTO from './TaskDTO';

interface ITaskRepository {

    create(data: TaskDTO): Promise<Task>;
    
    findById(id: string): Promise<Task | undefined>;

    listTaskByBoard(board_id: string): Promise<Task[]>

}

export default ITaskRepository;