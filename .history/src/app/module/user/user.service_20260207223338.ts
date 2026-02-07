import { Role, Specialty } from "../../../generated/prisma/client";
import { auth } from "../../lib/auth";
import { prisma } from "../../lib/prisma";
import { ICreateDoctorPayload } from "./user.interface";

const createDoctor = async (payload: ICreateDoctorPayload) => {
    const specialties: Specialty[] = [];
    for (const specialtyId of payload.specialties) {
        const specialty = await prisma.specialty.findUnique({
            where: {
                id:specialtyId
            }
        })
        if (!specialty) {
            throw new Error(`specialty with id ${specialtyId} not found`)

        }
        specialties.push(specialty);
    }
    const userExists = await prisma.user.findUnique({
        where: {
            email:payload.doctor.email
        }

    })
    if (userExists) {
        throw new  Error ("user with this email already exists")
    }

    const userData = await auth.api.signUpEmail({
        body: {
            email: payload.doctor.email,
            password: payload.password,
            role: Role.DOCTOR,
            name: payload.doctor.name,
            needPasswordChange: true,
            
        }
    })

    try {
        
    } catch (error) {
        console.log("Transaction error:", error)
        await prisma.user.delete(args)
        
    }
}