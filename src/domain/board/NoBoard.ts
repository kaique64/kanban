class NoBoards extends Error {

    constructor() {
        super('Has no boards registered');
    }

}

export default NoBoards;