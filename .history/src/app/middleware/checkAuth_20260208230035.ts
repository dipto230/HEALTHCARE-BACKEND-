import { Request } from "express";
import { Role } from "../../generated/prisma/enums";




export const checkAuth = (...authRoles:Role[])=>async(req:Request, res:Response)