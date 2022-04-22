import EmptyBoard from "../../..//domain/board/EmptyBoard";
import ITaskRepository from "src/domain/task/ITaskRepository";
import Task from "src/domain/task/Task";

class ListTasksByBoard {

    constructor(
        private taskRepository: ITaskRepository,
    ) {}

    public async execute(boardId: string): Promise<Task[]> {
        const tasksFoundByBoard = await this.taskRepository.listTaskByBoard(boardId);

        if (tasksFoundByBoard.length === 0) {
            throw new EmptyBoard(boardId);
        }

        return tasksFoundByBoard;
    }

}

export default ListTasksByBoard;