import CreateTask from "../../../src/application/task/create/CreateTask";
import TaskDTO from "../../../src/domain/task/TaskDTO";
import BoardFactory from '../../../src/domain/board/BoardFactory';
import TaskRepositoryInMemory from "../../../src/infra/repositories/task/TaskRepositoryInMemory";
import BoardRepositoryInMemory from "../../../src/infra/repositories/board/BoardRepositoryInMemory";
import BoardNotFound from "../../../src/domain/board/BoardNotFound";

let taskRepositoryInMemory: TaskRepositoryInMemory;
let boardFactory: BoardFactory;
let boardRepositoryInMemory: BoardRepositoryInMemory;
let createTask: CreateTask;

describe('Create Task Use Case', () => {
    
    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        boardFactory = new BoardFactory();
        boardRepositoryInMemory = new BoardRepositoryInMemory();
        createTask = new CreateTask(
            taskRepositoryInMemory,
            boardRepositoryInMemory,
        );
    })

    it('should be able to create a new task', async () => {
        const boardCreatedWithFactory = boardFactory.withName('Board').create();
        const board = await boardRepositoryInMemory.create(boardCreatedWithFactory);
        const taskData: TaskDTO = {
            name: 'Make breakfast',
            description: 'Make breakfast with eggs and bacon',
            priority: 'Medium',
            boardId: board.id
        };

        // Create a new task
        const task = await createTask.execute(taskData);

        expect(task).toHaveProperty('id', task.id);
    });

    it('should be not able to create a new task with non-existing board id', async () => {
        const taskData: TaskDTO = {
            name: 'Make breakfast',
            description: 'Make breakfast with eggs and bacon',
            priority: 'Medium',
            boardId: 'non-existing board id'
        };

        await expect(
            createTask.execute(taskData)
        ).rejects.toBeInstanceOf(BoardNotFound);
    });

})