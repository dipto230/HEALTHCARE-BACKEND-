import { Request, Response } from "express"

const getStats = async (req:Request, res:Response) => {
    console.log("connected ", req.query, res)
    
}
export const RagController ={
    getStats
}