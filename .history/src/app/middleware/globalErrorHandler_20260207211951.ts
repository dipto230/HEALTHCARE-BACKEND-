/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express"
import { envVars } from "../../config/env"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    
    if(envVars.NODE_ENV === 'devel')
    res.status(500).json({
        success: false,
        message: 'INTERNAL SERVER ERROR',
        error:err.message,
    })
}