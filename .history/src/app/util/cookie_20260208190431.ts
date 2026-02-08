import { Response } from "express";

const setCookie = (res: Response, key: string, value: string) => {
    res.cookie(name, val, options)
}