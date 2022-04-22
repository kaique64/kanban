import TaskRepositoryInMemory from '../../src/infra/repositories/task/TaskRepositoryInMemory';
import ListTasksByBoard from '../../src/application/task/list-tasks-by-board/ListTasksByBoard';
import BoardFactory from '../../src/domain/board/BoardFactory';

let taskRepositoryInMemory: TaskRepositoryInMemory;
let boardFactory: BoardFactory;
let listTasksByBoard: ListTasksByBoard; 

describe('List Tasks By Board Use Case', () => {

    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        boardFactory = new BoardFactory();
        listTasksByBoard = new ListTasksByBoard(
            taskRepositoryInMemory,
        );
    });

    it('should be able to list the tasks by board', async () => {
        const board = boardFactory.withName('To  do').create();
        
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
    });

    it('should be not able to list the tasks by board with non-existing board id', async () => {
    });

});