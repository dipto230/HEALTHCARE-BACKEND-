/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request } from "express";


export const deleteUploadedFilesFromGlobalErrorHandler = async (req: Request) => {
    try {
        const filesToDelete : string[] = [];


    } catch (error: any) {
        console.error("Error deleting uploaded files from Global Error Handler", error);
    }

}