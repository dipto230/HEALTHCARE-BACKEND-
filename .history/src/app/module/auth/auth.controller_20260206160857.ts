import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";

const registerPatient = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await AuthSer
    }
)