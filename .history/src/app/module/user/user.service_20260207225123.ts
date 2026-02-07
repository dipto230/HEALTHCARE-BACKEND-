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
        const result = await prisma.$transaction(async (tx) => {
             await tx.doctor.create({
                data: {
                    userId: userData.user.id,
                    ...payload.doctor,
                }
            })
            const DoctorSpecialtyData = specialties.map((specialty) => {
                return {
                    doctorId: doctorData.id,
                    specialtyId:specialty.id 
                }
            })
            await tx.doctorSpecialty.createMany({
                data:DoctorSpecialtyData
            })
            const doctor = await tx.doctor.findUnique({
                where: {
                    id:doctorData.id
                },
                select: {
                    id: true,
                    userId: true,
                    name: true,
                    email: true,
                    profilePhoto: true,
                    contactNumber: true,
                    address: true,
                    registrationNumber: true,
                    experience: true,
                    gender: true,
                    appointmentFee: true,
                    qualification: true,
                    currentWorkingPlace: true,
                    designation: true,
                    
                    specialties: {
                        select: {
                            specialty: {
                                select: {
                                    title: true,

                                    id: true 
                                }
                            }
                        }
                    }
                }

            })
         })
        
        return result;
        
    } catch (error) {
        console.log("Transaction error:", error)
        await prisma.user.delete({
            where: {
                id:userData.user.id
            }
        })
        throw error 
        
    }
}