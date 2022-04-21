import { v4 as uuid } from "uuid";
import Board from "./Board";

class BoardFactory {

    private board: Board;

    public withName(name: string): BoardFactory {
        this.board = new Board(name, uuid());
        
        return this;
    }

    public create(): Board {
        return this.board;
    }

}

export default BoardFactory;
