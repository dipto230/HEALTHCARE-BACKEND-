/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../../config/env"
import status from "http-status";
import z from "zod";
import { TErrorResponse, TErrorSource } from "../interfaces/error.interfaces";
import { handleZodError } from "../errorHelpers/handleZodError";



// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    if (envVars.NODE_ENV === 'development') {
        console.log("Error from global error handler", err);
    }

    let errorSources:TErrorSource[] = []
    let statusCode: number = status.INTERNAL_SERVER_ERROR;
    let message: string = 'Internal Server Error'
    

    if (err instanceof z.ZodError) {
        const simplifiedError = handleZodError(err);

        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errorSources.push(...simplifiedError.errorSources!)

        // err.issues.forEach(issue => {
        //     errorSource.push({
        //         // path: issue.path.length > 1 ? issue.path.join("=>"):issue.path[0].toString(),
        //         path:issue.path.join(" "),
        //         message:issue.message
        //     })
        // })
    }

    const errorResponse: TErrorResponse = {
         success: false,
        message: message,
        errorSources,
        error: envVars.NODE_ENV === 'development' ? err: undefined,
    }

    res.status(statusCode).json(errorResponse)
}