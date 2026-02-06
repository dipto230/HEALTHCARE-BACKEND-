import { Request, Response } from "express";
import { catchAsync } from "../../shared/catchAsync";
import { AuthService } from "./auth.service";

const registerPatient = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await AuthService.registerPatient(payload)
    }
)