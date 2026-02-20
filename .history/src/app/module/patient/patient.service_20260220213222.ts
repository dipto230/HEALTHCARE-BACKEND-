import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IUpdatePatientHealthDataPayload, IUpdatePatientProfilePayload } from "./patient.interface";
import { convertToDateTime } from "./patient.utils";

const updateMyProfile = async (user: IRequestUser, payload: IUpdatePatientProfilePayload) => {
    const patientData = await prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email
        },
        include: {
            patientHealthData: true,
            medicalReports: true,
        }
    });
    const result = await prisma.$transaction(async (tx) => {
        if (payload.patientInfo) {
            await tx.patient.update({
                where: {
                    id:patientData.id
                },
                data:{
                    ...payload.patientInfo
                }
            });
           
}