import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";


const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const Payload = req.body
        const result = await 
    }
)