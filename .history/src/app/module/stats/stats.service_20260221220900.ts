import status from "http-status";
import { Role } from "../../../generated/prisma/enums";
import { IRequestUser } from "../../interfaces/request.user.interface";
import AppError from "../../middleware/AppError";

const getDashboardStatsData = async (user:IRequestUser) => {
    let statsData;
    switch(user.role){
        case Role.SUPER_ADMIN:
            statsData = getSuperAdminStatsData();
            break;
        case Role.ADMIN:
            statsData = getAdminStatsData();
            break;
        case Role.DOCTOR:
            statsData = getDoctorStatsData(user);
            break;
        case Role.PATIENT:
            statsData = getPatientStatsData(user);
            break;
         default:
            throw new AppError(status.BAD_REQUEST, "Invalid user role");
    }
     return statsData;
}

const getSuperAdminStatsData = async () => {
    const appoi
}

const getAdminStatsData = async()=>{}

const getDoctorStatsData = async () => { }

const getPatientStatsData = async()=>{}

