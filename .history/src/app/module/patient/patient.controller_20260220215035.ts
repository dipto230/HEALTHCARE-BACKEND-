import { IRequestUser } from "../../interfaces/request.user.interface";
import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";
import { PatientService } from "./patient.service";
import { sendResponse } from "../../shared/sendResponse";
import status from "http-status";


const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
    const user = req.user as IRequestUser;
    const payload = req.body;
    const result = await PatientService.updateMyProfile(user, payload)
    sendResponse(res, {
        
        httpStatusCode: status.OK,
        message:"Profile updated successfully",
        
        data:result

    })
})