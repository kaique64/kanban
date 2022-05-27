import TaskRepositoryInMemory from '../../../src/infra/repositories/task/TaskRepositoryInMemory';
import BoardRepositoryInMemory from '../../../src/infra/repositories/board/BoardRepositoryInMemory';
import ListTasksByBoard from '../../../src/application/task/list-tasks-by-board/ListTasksByBoard';
import EmptyBoard from '../../../src/domain/board/EmptyBoard';
import BoardNotFound from '../../../src/domain/board/BoardNotFound';

let taskRepositoryInMemory: TaskRepositoryInMemory;
let boardRepositoryInMemory: BoardRepositoryInMemory;
let listTasksByBoard: ListTasksByBoard; 

describe('List Tasks By Board Use Case', () => {

    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        boardRepositoryInMemory = new BoardRepositoryInMemory();
        listTasksByBoard = new ListTasksByBoard(
            taskRepositoryInMemory,
            boardRepositoryInMemory,
        );
    });

    it('should be able to list the tasks by board', async () => {
        const board = await boardRepositoryInMemory.create({ name: 'To do' });
        
        // Create a new task
        await taskRepositoryInMemory.create({
            name: 'Make the breakfast',
            description: 'Make breakfast for the kids, with eggs and bacon',
            priority: 'High',
            boardId: board.id,
        });

        const tasksByBoard = await listTasksByBoard.execute(board.id);

        expect(tasksByBoard).toHaveLength(1);
    });

    it('should be not able to list the tasks by board with a empty list', async () => {
        const board = await boardRepositoryInMemory.create({ name: 'To do' });;

        await expect(
            listTasksByBoard.execute(board.id)
        ).rejects.toBeInstanceOf(EmptyBoard);
    });

    it('should be not able to list the tasks by board with non-existing board id', async () => {
        await expect(
            listTasksByBoard.execute('non-existing board id')
        ).rejects.toBeInstanceOf(BoardNotFound);
    });

});