import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IBookAppointmentPayload } from "./appointment.interface";

const bookAppointment = async (payload: IBookAppointmentPayload, user: IRequestUser) => {
    const patientData = await prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email,
        }
    });
    const doctorData = await prisma.doctor.findUniqueOrThrow({
        where:{
            id:payload.doctorId,
            isDeleted: false
        }
    });
    const doctorSchedules = await prisma.doctorSchedules.findUniqueOrThrow({
        where: {
            doctorId_scheduleId: {
                scheduleId: payload.scheduleId,
                doctorId: payload.doctorId,
            }
           
         
        }
    });
    const 
}