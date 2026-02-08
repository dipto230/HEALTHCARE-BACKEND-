/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { Role } from "../../generated/prisma/enums";
import { CookieUtils } from "../util/cookie";
import { prisma } from "../lib/prisma";




export const checkAuth = (...authRoles: Role[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const sessionToken = CookieUtils.getCookie(req, "better-auth.session_token")
        if (!sessionToken) {
          throw new Error('Unauthorized access!No session token provided')
        }  
        if (sessionToken) {
            const sessionExists = await prisma.session.findFirst({
                where: {
                    token: sessionToken,
                    expiresAt: {
                        gt: new Date(),

                    }
                },
                include: {
                    user:true,
                }
            })
            if (sessionExists && sessionExists.user) {
                const user = sessionExists.user;
                const now = new Date();
                const expireAt = new Date(sessionExists.expiresAt)
                const createdAt = new Date(sessionExists.createdAt)
                const sessionLifeTime = expireAt.getTime() - createdAt.getTime()
                const timeRemaining = expireAt.getTime() - now.getTime()
                const percentRemaining = (timeRemaining / sessionLifeTime) * 100;

                if (percentRemaining < 20) {
                    res.setHeader('X-Session-Refresh', 'true')
                    res.setHeader('X-Session-Expires-At', e)
                }
            }
        }
    } catch (error:any) {
     next(error)   
    }
}