import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
    try {
        const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);
    res.status(201).json({
        success: true,
        message: "Specialty Created Successfully",
        data:result
    })
    } catch (error: any) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to create specialty",
            error: error error.message
        })
   }
}

const getAllSpecialties = async (req: Request, res: Response) => {
    
}


export const SpecialtyController = {
    createSpecialty
}