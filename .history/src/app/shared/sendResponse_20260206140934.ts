import { Response } from "express";

const sendResponse = <T>(res: Response, req: Request, responseData: IResponse<T>) => {
    const { httpStatusCode, success, message, data } = responseData;
    res.status(httpStatusCode).json({
        success,
        message,
        data
    });
}