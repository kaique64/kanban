import IBoardRepository from "src/domain/board/IBoardRepository";
import Board from "../../../domain/board/Board";

class ListBoards {

    constructor(
        private boardRepository: IBoardRepository,        
    ) {}

    public async execute(): Promise<Board[]> {
        const boards = await this.boardRepository.list();

        return boards;
    }

}

export default ListBoards;
