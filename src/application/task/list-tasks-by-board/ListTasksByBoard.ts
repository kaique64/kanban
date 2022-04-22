import ITaskRepository from "src/domain/task/ITaskRepository";
import Task from "src/domain/task/Task";

class ListTasksByBoard {

    constructor(
        private taskRepository: ITaskRepository,
    ) {}

    public async execute(boardId: string): Promise<Task[]> {
        const tasksFoundByBoard = this.taskRepository.listTaskByBoard(boardId);

        return tasksFoundByBoard;
    }

}

export default ListTasksByBoard;