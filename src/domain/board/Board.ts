class Board {

    id: string;
    name: string;

    constructor(name: string, id?: string) {
        this.name = name;

        if (id) {
            this.id = id;
        }
    }
    
}

export default Board;
