import { Request, Response } from "express";
import ListBoards from "../../../../application/board/list/ListBoards";
import CreateBoard from "../../../../application/board/create/CreateBoard";
import BoardRepositoryWithPrismaORM from "../../../../infra/repositories/board/BoardRepositoryWithPrismaORM";
import IErrorResponse from "../../pattern/http_response/IErrorResponse";
import ISuccessResponse from "../../pattern/http_response/ISuccessResponse";
import Board from "../../../../domain/board/Board";
import NoBoards from "../../../../domain/board/NoBoard";

type TResponseToCreateRequest = { name: string }
type TResponseToListRequest = { boards: Board[] }

const boardRepository = new BoardRepositoryWithPrismaORM();
const createBoardUseCase = new CreateBoard(boardRepository);
const listBoardsUseCase = new ListBoards(boardRepository);

class BoardController {

    public async create(req: Request, res: Response<ISuccessResponse<TResponseToCreateRequest> | IErrorResponse>): Promise<Response<ISuccessResponse<TResponseToCreateRequest> | IErrorResponse> | undefined> {
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

    public async list(req: Request, res: Response<ISuccessResponse<TResponseToListRequest> | IErrorResponse>): Promise<Response<ISuccessResponse<TResponseToListRequest> | IErrorResponse>> {
        let boards;

        try {
            boards = await listBoardsUseCase.execute();
        } catch (error) {
            if (error instanceof NoBoards) {
                return res.status(400).json({
                    status: 400,
                    error: true,
                    success: false,
                    message: error.message,
                })
            }
        } finally {
            return res.status(200).json({
                status: 200,
                body: {
                    boards
                },
                success: true,
                error: false,
            });
        }
    }

}

export default BoardController;
