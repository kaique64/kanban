import BoardFactory from "../../../src/domain/board/BoardFactory";
import Task from "../../../src/domain/task/Task";

let boardFactory: BoardFactory;

describe('Task entity', () => {
   
    beforeEach(() => {
        boardFactory = new BoardFactory();
    })

    it('should be able to create a new task', () => {
        const board = boardFactory.withName('New Board').create();
        const task: Task = new Task('Make breakfast', 'Make breakfast with eggs and bacon', 'Medium', board.id);

        expect(task.name).toEqual('Make breakfast');
        expect(task.description).toEqual('Make breakfast with eggs and bacon');
        expect(task.priority).toEqual('Medium');
        expect(task.boardId).toEqual(board.id);
    });

});