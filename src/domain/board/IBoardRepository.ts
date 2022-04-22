import Board from "./Board";
import BoardDTO from "./BoardDTO";

interface IBoardRepository {

    create(data: BoardDTO): Promise<Board>

    findById(id: string): Promise<Board | undefined>;

}

export default IBoardRepository;
