import { Request } from "express";
import { catchAsync } from "../../shared/catchAsync";

const registerPatient = catchAsync(
    async(req:Request, res:Respo)
)