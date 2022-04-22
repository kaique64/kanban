import BoardRepositoryInMemory from "../../src/infra/repositories/board/BoardRepositoryInMemory";
import CreateBoard from '../../src/application/board/create/CreateBoard';
import BoardDTO from '../../src/domain/board/BoardDTO';

let boardRepositoryInMemory: BoardRepositoryInMemory;
let createBoard: CreateBoard;

describe('Create Board Use Case', () => {

    beforeEach(() => {
        boardRepositoryInMemory = new BoardRepositoryInMemory();
        createBoard = new CreateBoard(
            boardRepositoryInMemory,
        );
    });

    it('should be able to create a new board', async () => {
        const boardData: BoardDTO = { name: 'To do' };
        
        const board = await boardRepositoryInMemory.create(boardData);

        expect(board).toHaveProperty('id');
        expect(board).toHaveProperty('name', 'To do');
    });

});
