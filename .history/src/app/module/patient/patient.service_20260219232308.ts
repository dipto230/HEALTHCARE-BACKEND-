import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IUpdatePatientProfilePayload } from "./patient.interface";

const updateMyProfile = async (user: IRequestUser, payload: IUpdatePatientProfilePayload) => {
    const patientData = await prisma.
}