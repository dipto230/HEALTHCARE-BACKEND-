/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../../config/env"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    if (envVars.NODE_ENV === 'development') {
        console.log("Error from global error handler", err);
    }
    const statusCode: number = 500;
    const message : string = 'Internal Server E'

    res.status(500).json({
        success: false,
        message: 'INTERNAL SERVER ERROR',
        error:err.message,
    })
}