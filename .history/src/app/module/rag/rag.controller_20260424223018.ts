import { Request, Response } from "express"
import { catchAsync } from "../../shared/catchAsync"

const getStats = async (req:Request, res:Response) => {
    console.log("connected ", req.query)
    res.status(200).json({message:"connected rag apis "})
}
const ingestDoctors = catchAsync(async(req:Request, ))
export const RagController ={
    getStats
}