import IBoardRepository from "src/domain/board/IBoardRepository";
import NoBoards from "../../../domain/board/NoBoard";
import Board from "../../../domain/board/Board";

class ListBoards {

    constructor(
        private boardRepository: IBoardRepository,        
    ) {}

    public async execute(): Promise<Board[]> {
        const boards = await this.boardRepository.list();

        if (boards.length === 0) {
            throw new NoBoards();
        }

        return boards;
    }

}

export default ListBoards;
