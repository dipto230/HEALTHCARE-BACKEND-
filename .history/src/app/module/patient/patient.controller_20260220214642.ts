import { IRequestUser } from "../../interfaces/request.user.interface";
import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";
import { PatientService } from "./patient.service";


const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
    const user = req.user as IRequestUser;
    const payload = req.body;
    const result = await PatientService.updateMyProfile(user, payload)
    
})