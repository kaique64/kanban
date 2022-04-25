export default interface ISuccessResponse<T> {
    status: number;
    body: T;
    success: boolean;
    error: boolean;
}