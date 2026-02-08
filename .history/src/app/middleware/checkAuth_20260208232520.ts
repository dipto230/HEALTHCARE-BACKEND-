/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { Role, UserStatus } from "../../generated/prisma/enums";
import { CookieUtils } from "../util/cookie";
import { prisma } from "../lib/prisma";
import AppError from "./AppError";
import status from "http-status";




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
                    res.setHeader('X-Session-Expires-At', expireAt.toISOString())
                    res.setHeader('X-Time-Remaining', timeRemaining.toString())
                }
                if (user.status === UserStatus.BLOCK || user.status === UserStatus.DELETED) {
                    throw new AppError(status.UNAUTHORIZED, 'Unauthorized access! User is not active')
                }
                if (user.isDeleted) {
                    throw new AppError(status.UNAUTHORIZED, 'Unauthorized access! User is deleted')
                }
                if (authRoles.length > 0 && !authRoles.includes(user.role)) {
                    throw new AppError(status.FORBIDDEN, 'Forbidden access! You do not have permission to access this resource')
                }
                // return next()
            }
            const accessToken = CookieUtils.getCookie(req, 'accessToken')
            if (!accessToken) {
                thr
            }
        }
    } catch (error:any) {
     next(error)   
    }
}