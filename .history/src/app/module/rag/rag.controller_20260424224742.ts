import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"
import { sendResponse } from "../../shared/sendResponse"

const getStats = async (req:Request, res:Response) => {
    console.log("connected ", req.query)
    res.status(200).json({message:"connected rag apis "})
}
const ingestDoctors = catchAsync(async (req: Request, res: Response) => {


    sendResponse(res, {
        success: true,
        m
    })
    
})
export const RagController ={
    getStats,
    ingestDoctors
}