import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IUpdatePatientHealthDataPayload, IUpdatePatientProfilePayload } from "./patient.interface";

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
            if (payload.patientInfo.name || payload.patientInfo.profilePhoto) {
                 const userData = {
                    name : payload.patientInfo.name ? payload.patientInfo.name : patientData.name,
                    image : payload.patientInfo.profilePhoto ? payload.patientInfo.profilePhoto : patientData.profilePhoto,
                }
                      await tx.user.update({
                where: {
                    id:patientData.userId
                },
                data: {
                    // name: payload.patientInfo.name,
                    // image: payload.patientInfo.profilePhoto,
                    ...userData
                    
                }
            })
            };
            if (payload.patientHealthData) {
                const healthDataToSave: IUpdatePatientHealthDataPayload = {
                    ...payload.patientHealthData,
                };
                if (payload.patientHealthData.dateOfBirth) {
                    healthDataToSave.dateOfBirth = convert
                }
            }
      
        }
    })
}