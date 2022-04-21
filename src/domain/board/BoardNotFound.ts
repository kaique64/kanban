class BoardNotFound extends Error {

    constructor(boardId: string) {
        super(`Board id: ${boardId} not found!`);
    }

}

export default BoardNotFound;
