import Task from '../../../domain/task/Task';
import ITaskRepository from '../../../domain/task/ITaskRepository';
import TPriority from '../../../domain/task/TPriority';
import TaskDTO from '../../../domain/task/TaskDTO';
import IBoardRepository from '../../../domain/board/IBoardRepository';
import BoardNotFound from '../../../domain/board/BoardNotFound';

class CreateTask {
    
    private readonly taskRepository: ITaskRepository;
    private readonly boardRepository: IBoardRepository;

    constructor(
        taskRepositoryInMemory: ITaskRepository, 
        boardRepository: IBoardRepository,
    ) {
        this.taskRepository = taskRepositoryInMemory;
        this.boardRepository = boardRepository;
    }

    public async execute(data: TaskDTO): Promise<Task> {
        const board = await this.boardRepository.findById(data.boardId);

        if (!board) {
            throw new BoardNotFound(data.boardId);
        }

        const task = await this.taskRepository.create({
            name: data.name,
            description: data.description,
            priority: data.priority as TPriority,
            boardId: data.boardId,
        });

        return task;
    }

}

export default CreateTask;