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
const getDoctorById = async (id: string) => {
  const doctor = await prisma.doctor.findFirst({
    where: {
      id,
      isDeleted: false
    },
    include: {
      user: true,
      specialties: {
        include: {
          specialty: true
        }
      }
    }
  })

  if (!doctor) {
    throw new ApiError(status.NOT_FOUND, "Doctor not found")
  }

  return doctor
}

const updateDoctor = async (
  id: string,
  payload: IUpdateDoctorPayload
) => {
  
  await getDoctorById(id)

  return prisma.doctor.update({
    where: { id },
    data: payload
  })
}

const deleteDoctor = async (id: string) => {
  
  await getDoctorById(id)

  return prisma.doctor.update({
    where: { id },
    data: {
      isDeleted: true,
      deletedAt: new Date()
    }
  })
}

export const DoctorService = {
    getAllDoctors
}