import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { UserService } from "./user.service";


const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await UserService.createDoctor(payload);

        
    }
)