import status from "http-status";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";
import { DoctorService } from "./doctor.service";

const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        
        const result = await DoctorService.getAllDoctors()

        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Doctor registered successfully",
            data:result  
        })
    }
)