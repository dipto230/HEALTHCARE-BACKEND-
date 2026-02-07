import { prisma } from "../../lib/prisma"

const getAllDoctors = async () => {
    const doctors = await prisma.doctor.findMany({
        include: {
            user: true,
            specialties: {
                include: {
                    specialty:true
                }
            }
        }
    })
    return doctors
}


//code by me


export const DoctorService = {
    getAllDoctors
}