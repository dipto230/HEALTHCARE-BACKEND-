import status from "http-status";
import z from "zod";
import { TErrorResponse, TErrorSource } from "../interfaces/error.interfaces";

export const handleZodError = (err: z.ZodError):TErrorResponse => {
      const   statusCode = status.BAD_REQUEST;
    const message = "zod validation error";
    const errorSources:TErrorSource[] =[]

        err.issues.forEach(issue => {
            errorSources.push({
                // path: issue.path.length > 1 ? issue.path.join("=>"):issue.path[0].toString(),
                path:issue.path.join(" "),
                message:issue.message
            })
        })
    return {
        success: false,
        message,
        errorSources,
        statusCode
    }
}