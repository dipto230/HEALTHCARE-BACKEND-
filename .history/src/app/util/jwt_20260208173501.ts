import { JwtPayload, SignOptions } from "jsonwebtoken"
import { _jwt } from "zod/v4/core"

const createToken = (
    payload: JwtPayload,
    secret:string,
    {expiresIn}:SignOptions
) => {
   const token = _jwt(Class) 
}

const verifyToken = ()=>{

}

const decodeToken = () => {
    
}