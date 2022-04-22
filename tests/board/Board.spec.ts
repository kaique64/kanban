import BoardFactory from "../../src/domain/board/BoardFactory";

let boardFactory: BoardFactory;

describe('Board entity', () => {
    
    beforeEach(() => {
        boardFactory = new BoardFactory();
    });

    it('should be able to create a new board', () => {
        const board = boardFactory.withName('Make the breakfast').create();

        expect(board).toHaveProperty('id');
        expect(board).toHaveProperty('name', 'Make the breakfast');
    })

})