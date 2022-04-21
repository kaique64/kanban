import Board from "../../../domain/board/Board";
import IBoardRepository from "../../../domain/board/IBoardRepository";

class BoardRepositoryInMemory implements IBoardRepository {
    
    private boards: Board[] = [];

    public async create(data: BoardDTO): Promise<Board> {
        const board = new Board(data.name);
        
        this.boards.push(board);

        return board;
    }
    
    public async findById(id: string): Promise<Board | undefined> {
        const board = this.boards.find((board) => board.id === id);

        return board;
    }
    
}

export default BoardRepositoryInMemory;
