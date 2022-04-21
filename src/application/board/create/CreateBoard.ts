import Board from "src/domain/board/Board";
import IBoardRepository from "src/domain/board/IBoardRepository";

class CreateBoard {

    private readonly boardRepository: IBoardRepository;

    // Injecting board repository
    constructor(boardRepository: IBoardRepository) {
        this.boardRepository = boardRepository;
    }
    
    public async execute(data: BoardDTO): Promise<Board> {
        const board = this.boardRepository.create(data);

        return board;
    }

}

export default CreateBoard;
