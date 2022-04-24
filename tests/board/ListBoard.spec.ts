import ListBoards from '../../src/application/board/list/ListBoards';
import BoardRepositoryInMemory from '../../src/infra/repositories/board/BoardRepositoryInMemory';
import NoBoards from '../../src/domain/board/NoBoard';

let boardRepository: BoardRepositoryInMemory;
let listBoardsUseCase: ListBoards;

describe('List Board Use Case', () => {

    beforeEach(() => {
        boardRepository = new BoardRepositoryInMemory();
        listBoardsUseCase = new ListBoards(boardRepository);
    });

    it('should be able to list all boards', async () => {
        const board = await boardRepository.create({ name: 'To do' });
        const boards = await listBoardsUseCase.execute();

        expect(boards).toHaveLength(1);
        expect(boards).toMatchObject([
            {
                id: board.id,
                name: 'To do'
            },
        ]);
    });

    it('should be not able to list all the boards with no boards in database', async () => {
        await expect(
            listBoardsUseCase.execute()
        ).rejects.toBeInstanceOf(NoBoards);
    });

});