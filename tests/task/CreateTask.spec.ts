import CreateTask from "../../src/application/task/create/CreateTask";
import TaskDTO from "../../src/domain/task/TaskDTO";
import BoardFactory from '../../src/domain/board/BoardFactory';
import TaskRepositoryInMemory from "../../src/infra/repositories/task/TaskRepositoryInMemory";

let taskRepositoryInMemory: TaskRepositoryInMemory;
let boardFactory: BoardFactory;
let createTask: CreateTask;

describe('Create Task Use Case', () => {
    
    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        boardFactory = new BoardFactory();
        createTask = new CreateTask(
            taskRepositoryInMemory,
        );
    })

    it('should be able to create a new task', async () => {
        const board = boardFactory.withName('Board').create();
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

})