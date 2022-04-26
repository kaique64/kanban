import IBoardRepository from "../../../domain/board/IBoardRepository";
import ITaskRepository from "../../../domain/task/ITaskRepository";
import UpdateBoardTaskDTO from "../../../domain/task/UpdateBoardTaskDTO";
import Task from "../../../domain/task/Task";
import BoardNotFound from "../../../domain/board/BoardNotFound";
import TaskNotFound from "../../../domain/task/TaskNotFound";

class UpdateBoardTask {

    constructor(
        private taskRepository: ITaskRepository,
        private boardRepository: IBoardRepository,
    ) {}

    public async execute(data: UpdateBoardTaskDTO): Promise<Task> {
        const taskFound = await this.taskRepository.findById(data.id);
        const board = await this.boardRepository.findById(data.boardId);

        if (!taskFound) {
            throw new TaskNotFound(data.boardId);
        }

        if (!board) {
            throw new BoardNotFound(data.boardId);
        }

        const task = await this.taskRepository.updateBoardTask(data);

        return task;
    }
    
}

export default UpdateBoardTask;
