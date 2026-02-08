/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { Role } from "../../generated/prisma/enums";
import { CookieUtils } from "../util/cookie";




export const checkAuth = (...authRoles: Role[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = CookieUtils.getCookie(req, "better-auth.session_token")
        if (!sessionToken) {
          throw new Error('Unauthorized access!No session token provided')
      }  
    } catch (error:any) {
     next(error)   
    }
}