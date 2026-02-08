import { JwtPayload } from "jsonwebtoken";
import { jwtUtils } from "./jwt";
import { envVars } from "../../config/env";



const getAccessToken = (payload: JwtPayload) => {
    const token = jwtUtils.createToken(payload, envVars.ACCESS_TOKEN_SECRET,{})
}