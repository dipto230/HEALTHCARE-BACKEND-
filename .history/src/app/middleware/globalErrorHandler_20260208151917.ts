/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../../config/env"
import status from "http-status";
import z from "zod";

interface TErrorSource{
    path: string;
    message: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    if (envVars.NODE_ENV === 'development') {
        console.log("Error from global error handler", err);
    }

    const errorSource:TErrorSource[] = []
    let statusCode: number = status.INTERNAL_SERVER_ERROR;
    let message: string = 'Internal Server Error'
    

    if (err instanceof z.ZodError) {
        statusCode = status.BAD_REQUEST;
        message = "zod validation error"

        err.issues.forEach(issue => {
            errorSource.push({
                path:issue.path.join(".") || 
            })
        })
    }

    res.status(statusCode).json({
        success: false,
        message: message,
        error: err.message,
    })
}