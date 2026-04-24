import { Request, Response } from "express"

const getStats = async (req:Request, res:Response) => {
    console.log("connected ", req.query)
    res.status(200).json({message:"connected rag apis "})
}
const ingestDoctors = c
export const RagController ={
    getStats
}