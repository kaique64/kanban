import { Request, Response } from "express";
import CreateBoard from "../../../../application/board/create/CreateBoard";
import BoardRepositoryWithPrismaORM from "../../../../infra/repositories/board/BoardRepositoryWithPrismaORM";
import IErrorResponse from "../../pattern/http_response/IErrorResponse";
import ISuccessResponse from "../../pattern/http_response/ISuccessResponse";

type TResponse = { name: string }

const boardRepository = new BoardRepositoryWithPrismaORM();
const createBoardUseCase = new CreateBoard(boardRepository);

class BoardController {

    public async create(req: Request, res: Response<ISuccessResponse<TResponse> | IErrorResponse>): Promise<Response<ISuccessResponse<TResponse> | IErrorResponse> | undefined> {
        const { name } = req.body;

        const board = await createBoardUseCase.execute({ name });

        return res.status(201).json({
            status: 201,
            body: {
                name: board.name,
            },
            success: true,
            error: false,
        });
    }

}

export default BoardController;
