import { PrismaClient } from "@prisma/client";
import Board from "src/domain/board/Board";
import IBoardRepository from "src/domain/board/IBoardRepository";

class BoardRepositoryWithPrismaORM implements IBoardRepository {
    
    constructor(
        private prismaClient: PrismaClient,
    ) {}

    public async create(data: BoardDTO): Promise<Board> {
        const board = await this.prismaClient.board.create({
            data: {
                name: data.name,
            },
        });

        return board;
    }
    
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
