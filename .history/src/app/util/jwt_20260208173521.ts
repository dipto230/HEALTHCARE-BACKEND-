import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"


const createToken = (
    payload: JwtPayload,
    secret:string,
    {expiresIn}:SignOptions
) => {
   const token =  jwt
}

const verifyToken = ()=>{

}

const decodeToken = () => {
    
}