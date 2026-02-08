
import { UserStatus } from "../../../generated/prisma/enums";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { tokenUtils } from "../../util/token";

interface IRegisterPatientPayload{
    name: string,
    email: string,
    password:string
}

const registerPatient = async (payload:IRegisterPatientPayload) => {
    const { name, email, password } = payload;
    const data = await auth.api.signUpEmail({
        body: {
            name,
            email,
            password,
            //default values
            // needPasswordChange:false,
            // role:Role.PATIENT
        }
    })
    if (!data.user) {
        throw new Error("Failed to register patient")
    }
    try {
            const patient = await prisma.$transaction(async (tx) => {
     const patientTx =   await tx.patient.create({
            data: {
                userId: data.user.id,
                name: payload.name,
                email: payload.email,
                // contactNumber:payload.contactNumber
                
            }
     })
        return patientTx
    })

    return {
        ...data,
        patient
    }
        
    } catch (error) {
        console.log("Transaction error: ", error)
        await prisma.user.delete({
            where: {
                id:data.user.id
            }
        })
        throw error;
    }

}

interface ILoginUserPayload{
    email: string,
    password:string
}


const loginUser = async (payload: ILoginUserPayload) => {
    const { email, password } = payload;
    const data = await auth.api.signInEmail({
        body: {
            email,
            password
        }
    })
    if (data.user.status === UserStatus.BLOCK) {
        throw new Error("User is blocked")
    }
    if (data.user.isDeleted || data.user.status === UserStatus.DELETED) {
        throw new Error("user is deleted")
    }
    const accessToken = tokenUtils.getAccessToken({
        userId: data.user.id,
        role: data.user.role,
        name:data.user.name
    })
    return data
}



export const AuthService = {
    registerPatient,
    loginUser
}