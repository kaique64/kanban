class EmptyBoard extends Error {

    constructor(boardId: string) {
        super(`Board id: ${boardId} has no tasks!`);
    }

}

export default EmptyBoard;