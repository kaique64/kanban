import EmptyBoard from "../../..//domain/board/EmptyBoard";
import ITaskRepository from "src/domain/task/ITaskRepository";
import Task from "src/domain/task/Task";
import IBoardRepository from "../../../domain/board/IBoardRepository";
import BoardNotFound from "../../../domain/board/BoardNotFound";

class ListTasksByBoard {

    constructor(
        private taskRepository: ITaskRepository,
        private boardRepository: IBoardRepository,
    ) {}

    public async execute(boardId: string): Promise<Task[]> {
        const board = await this.boardRepository.findById(boardId);

        if (!board) {
            throw new BoardNotFound(boardId);
        }

        const tasksFoundByBoard = await this.taskRepository.listTaskByBoard(boardId);

        if (tasksFoundByBoard.length === 0) {
            throw new EmptyBoard(boardId);
        }

        return tasksFoundByBoard;
    }

}

export default ListTasksByBoard;