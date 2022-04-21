import Board from "./Board";

interface IBoardRepository {

    create(data: BoardDTO): Promise<Board>

    findById(id: string): Promise<Board | undefined>;

}

export default IBoardRepository;
