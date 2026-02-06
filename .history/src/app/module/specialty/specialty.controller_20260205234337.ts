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
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to create specialty",
            error: error instanceof Error ? error.message : 'Unknown error'
        })
   }
}

const getAllSpecialties = async (req: Request, res: Response) => {
    try {
        const specialties = await SpecialtyService.getAllSpecialties();
        res.status(201).json({
            success: true,
            message: 'Specialties fetched Successfully',
            data:specialties
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to create specialty",
            error: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}


export const SpecialtyController = {
    createSpecialty
}