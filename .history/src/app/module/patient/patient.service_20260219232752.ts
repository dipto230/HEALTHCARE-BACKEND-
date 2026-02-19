import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IUpdatePatientProfilePayload } from "./patient.interface";

const updateMyProfile = async (user: IRequestUser, payload: IUpdatePatientProfilePayload) => {
    const patientData = await prisma.patient.findUniqueOrThrow({
        where: {
            email: user.email
        },
        include: {
            patientHealthData: true,
            medicalReports: ture,
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
            await tx.user.update({
                where: {
                    id:patient
                }
            })
        }
    })
}