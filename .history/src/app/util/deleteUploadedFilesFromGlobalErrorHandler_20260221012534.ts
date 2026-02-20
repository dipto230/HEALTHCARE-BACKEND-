import { Request } from "express";


export const deleteUploadedFilesFromGlobalErrorHandler = async (req: Request) => {
    try{

    } catch (error: any) {
        console.error("Error deleting uploaded files from Global Error Handler", error);
    }

}