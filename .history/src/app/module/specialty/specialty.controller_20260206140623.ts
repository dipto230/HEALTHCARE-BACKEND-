import { Request,  Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";

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

interface IResponse<T>{
    httpStatusCode: number;
    success: boolean;
    message: string;
    data?: T;
}

const sendResponse =<T>(res:Response, req:Request, responseData:IResponse<T></T>)



const getAllSpecialties = catchAsync(
    async (req: Request, res: Response) => {
          const specialties = await SpecialtyService.getAllSpecialties();
        res.status(201).json({
            success: true,
            message: 'Specialties fetched Successfully',
            data:specialties
        }) } )
const deleteSpecialty = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await SpecialtyService.deleteSpecialty(id as string);
        res.status(200).json({
            success: true,
            message: "Specialty deleted Successfully",
            data:result
        })
    } catch (error) {
          console.log(error)
        res.status(500).json({
            success: false,
            message: "Failed to delete specialty",
            error: error instanceof Error ? error.message : 'Unknown error'
        })
    }
}

const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;

    const result = await SpecialtyService.updateSpecialty(id as string, payload);

    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Failed to update specialty",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};


export const SpecialtyController = {
    createSpecialty,
    getAllSpecialties,
    deleteSpecialty,
    updateSpecialty
}


