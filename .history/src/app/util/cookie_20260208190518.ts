import { Response } from "express";

const setCookie = (res: Response, key: string, value: string, options:) => {
    res.cookie(key, value, {
        
    })
}