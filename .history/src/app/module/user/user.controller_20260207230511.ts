import { Request } from "express";
import { catchAsync } from "../../shared/catchAsync";

const createDoctor = catchAsync(
    async(req:Request, res:Response)
)