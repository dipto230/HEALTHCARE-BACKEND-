import { catchAsync } from "../../shared/catchAsync";

const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        
        const result = await 

        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Doctor registered successfully",
            data:result  
        })
    }
)