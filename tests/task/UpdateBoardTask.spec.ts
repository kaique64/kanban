import TaskRepositoryInMemory from '../../src/infra/repositories/task/TaskRepositoryInMemory';
import BoardRepositoryInMemory from '../../src/infra/repositories/board/BoardRepositoryInMemory';
import UpdateBoardTask from '../../src/application/task/update-board-task/UpdateBoardTask';
import TaskNotFound from '../../src/domain/task/TaskNotFound';
import BoardNotFound from '../../src/domain/board/BoardNotFound';

let taskRepositoryInMemory: TaskRepositoryInMemory;
let boardRepositoryInMemory: BoardRepositoryInMemory;
let updateBoardTask: UpdateBoardTask;

describe('UpdateBoardTask', () => {

    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        boardRepositoryInMemory = new BoardRepositoryInMemory();
        updateBoardTask = new UpdateBoardTask(
            taskRepositoryInMemory,
            boardRepositoryInMemory,
        );
    });

    it('should be able to update the board task', async () => {
        const board = await boardRepositoryInMemory.create({ name: 'To do' });
        const boardDoing = await boardRepositoryInMemory.create({ name: 'Doing' });

        const task = await taskRepositoryInMemory.create({
            name: 'Make the breakfast',
            description: 'Make the breakfast with eggs and bacon',
            priority: 'Medium',
            boardId: board.id,
        });

        const updatedTask = await updateBoardTask.execute({
            id: task.id,
            boardId: boardDoing.id,
        });

        expect(updatedTask).toHaveProperty('id');
        expect(updatedTask).toHaveProperty('boardId', boardDoing.id);
    });

    it('should be not able to update the board task with non-existing task id', async () => {
        const board = await boardRepositoryInMemory.create({ name: 'To do' });
        
        await expect(
            updateBoardTask.execute({
                id: 'non-existing task id',
                boardId: board.id,
            }),
        ).rejects.toBeInstanceOf(TaskNotFound);
    });

    it('should be not able to update the board task with non-existing board id', async () => {
        const board = await boardRepositoryInMemory.create({ name: 'To do' });

        const task = await taskRepositoryInMemory.create({
            name: 'Make the breakfast',
            description: 'Make the breakfast with eggs and bacon',
            priority: 'Medium',
            boardId: board.id,
        });
        
        await expect(
            updateBoardTask.execute({
                id: task.id,
                boardId: 'non-existing board id',
            }),
        ).rejects.toBeInstanceOf(BoardNotFound);
    });

});