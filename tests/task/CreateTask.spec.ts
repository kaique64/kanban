import CreateTask from "../../src/application/task/create/CreateTask";
import TaskDTO from "../../src/domain/task/TaskDTO";
import TaskRepositoryInMemory from "../../src/infra/repositories/task/TaskRepositoryInMemory";

let taskRepositoryInMemory: TaskRepositoryInMemory;
let createTask: CreateTask;

describe('Create Task Use Case', () => {
    
    beforeEach(() => {
        taskRepositoryInMemory = new TaskRepositoryInMemory();
        createTask = new CreateTask(
            taskRepositoryInMemory,
        );
    })

    it('should be able to create a new task', async () => {
        const taskData: TaskDTO = {
            name: 'Make breakfast',
            description: 'Make breakfast with eggs and bacon',
            priority: 'Medium',
        };

        // Create a new task
        const task = await createTask.execute(taskData);

        expect(task).toHaveProperty('id', task.id);
    });

})