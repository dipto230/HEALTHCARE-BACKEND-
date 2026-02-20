import { IRequestUser } from "../../interfaces/request.user.interface";
import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";


const updateMyProfile = catchAsync(async (req: Request, res: Response) => {
    const user = req.user as IRequestUser;
    const payload 
})