import status from "http-status";
import z from "zod";

export const handleZodError = (err: z.) => {
      const   statusCode = status.BAD_REQUEST;
       const  message = "zod validation error"

        err.issues.forEach(issue => {
            errorSource.push({
                // path: issue.path.length > 1 ? issue.path.join("=>"):issue.path[0].toString(),
                path:issue.path.join(" "),
                message:issue.message
            })
        })
}