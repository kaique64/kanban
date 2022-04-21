import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import CreateBoard from "../../../../application/board/create/CreateBoard";
import BoardRepositoryWithPrismaORM from "../../../../infra/repositories/board/BoardRepositoryWithPrismaORM";

const prismaClient = new PrismaClient();
const boardRepository = new BoardRepositoryWithPrismaORM(prismaClient);
const createBoardUseCase = new CreateBoard(boardRepository);

class BoardController {

    public async create(req: Request, res: Response): Promise<Response> {
        const { name } = req.body;

        const board = await createBoardUseCase.execute({ name });

        return res.status(200).json(board);
    }

}

export default BoardController;
