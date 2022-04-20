import Task from "../../src/domain/task/Task";

describe('Task entity', () => {
   
    it('should be able to create a new task', () => {
        const task: Task = new Task('Make breakfast', 'Make breakfast with eggs and bacon', 'Medium');

        expect(task.name).toEqual('Make breakfast');
        expect(task.description).toEqual('Make breakfast with eggs and bacon');
        expect(task.priority).toEqual('Medium');
    });

});