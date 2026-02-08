import { Response } from "express";

const setCookie = (res: Response, key: string, value: string, options:CookieOp) => {
    res.cookie(key, value, {
        
    })
}