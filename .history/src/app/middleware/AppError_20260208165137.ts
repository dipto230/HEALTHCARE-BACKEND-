class AppError extends Error{
    public statusCode: number;
    constructor(status)
}