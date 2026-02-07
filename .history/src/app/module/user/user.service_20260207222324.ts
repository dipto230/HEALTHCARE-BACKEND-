import { Specialty } from "../../../generated/prisma/client";
import { ICreateDoctorPayload } from "./user.interface";

const createDoctor = async (payload: ICreateDoctorPayload) => {
    const specialties: Specialty[] = [];
    for(const specialty of payload)
}