import { JwtPayload, SignOptions } from "jsonwebtoken";
import { jwtUtils } from "./jwt";
import { envVars } from "../../config/env";
import { CookieUtils } from "./cookie";



const getAccessToken = (payload: JwtPayload) => {
    const accessToken = jwtUtils.createToken(payload, envVars.ACCESS_TOKEN_SECRET,
        { expiresIn: envVars.ACCESS_TOKEN_EXPIRES_IN } as SignOptions
    )
    return accessToken
}

const getRefreshToken = (payload: JwtPayload) => {
    const accessToken = jwtUtils.createToken(payload, envVars.REFRESH_TOKEN_SECRET,
            { expiresIn: envVars.REFRESH_TOKEN_EXPIRES_IN } as SignOptions
        )
    return accessToken
}


const setAccessTokenCookie = (res: Response, token: string) => {
    CookieUtils.setCookie(res,)
}
export const tokenUtils = {
    getAccessToken,
    getRefreshToken
}