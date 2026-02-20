import { deleteFileFromCloudinary } from "../../../config/cloudinary.config";
import { IRequestUser } from "../../interfaces/request.user.interface";
import { prisma } from "../../lib/prisma";
import { IUpdatePatientHealthDataPayload, IUpdatePatientProfilePayload } from "./patient.interface";
import { convertToDateTime } from "./patient.utils";


