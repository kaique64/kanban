import { PrismaClient } from "@prisma/client";
import Board from "src/domain/board/Board";
import BoardDTO from "src/domain/board/BoardDTO";
import IBoardRepository from "src/domain/board/IBoardRepository";

class BoardRepositoryWithPrismaORM implements IBoardRepository {
    
    private prismaClient: PrismaClient;

    constructor() {
        this.prismaClient = new PrismaClient();
    }

    /**
     * function to create a new board in database
     * @param  {BoardDTO} data board informations (name as string)
     * @return {Board} return board entity from domain
    */
    public async create(data: BoardDTO): Promise<Board> {
        const board = await this.prismaClient.board.create({
            data: {
                name: data.name,
            },
        });

        return board;
    }
    
    /**
     * function to find the board by your id in database
     * @param  {string} id the board id, which must be a string (UUID)
     * @return {Board | undefined} the return can be undefined or the board entity from domain
    */
    public async findById(id: string): Promise<Board | undefined> {
        const board = await this.prismaClient.board.findUnique({
            where: {
                id,
            },
        });

        if (!board) {
            return undefined;
        }

        return board;
    }
    
}

export default BoardRepositoryWithPrismaORM;
