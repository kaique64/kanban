import BoardDTO from "src/domain/board/BoardDTO";
import Board from "../../../domain/board/Board";
import IBoardRepository from "../../../domain/board/IBoardRepository";
import { v4 as uuid } from 'uuid';

class BoardRepositoryInMemory implements IBoardRepository {
    
    private boards: Board[] = [];

    /**
     * function to create a new board in memory
     * @param  {BoardDTO} data board informations
     * @return {Board} return board entity from domain
    */
    public async create(data: BoardDTO): Promise<Board> {
        const board = new Board(data.name, uuid());
        
        this.boards.push(board);

        return board;
    }
    
    /**
     * function to find the board by your id in memory
     * @param  {string} id the board id, which must be a string (UUID)
     * @return {Board | undefined} the return can be undefined or the board entity from domain
    */
    public async findById(id: string): Promise<Board | undefined> {
        const board = this.boards.find((board) => board.id === id);

        return board;
    }

    public async list(): Promise<Board[]> {
        return this.boards;
    }
    
}

export default BoardRepositoryInMemory;
