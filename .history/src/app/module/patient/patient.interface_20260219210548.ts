import { Gender } from "../../../generated/prisma/enums";

export interface IUpdatePatientInfoPayload{
    name?: string;
    profile?: string;
    contactNumber?: string;
    address?: string;
}

export interface IUpdatePatientHealthDataPayload{
    gender: Gender;
    bloodGroup:
}