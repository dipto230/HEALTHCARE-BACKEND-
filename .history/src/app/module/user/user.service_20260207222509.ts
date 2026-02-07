import { Specialty } from "../../../generated/prisma/client";
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
    }
}