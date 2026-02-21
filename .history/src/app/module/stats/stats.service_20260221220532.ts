import { Role } from "../../../generated/prisma/enums";
import { IRequestUser } from "../../interfaces/request.user.interface";

const getDashboardStatsData = async (user:IRequestUser) => {
    let statsData;
    switch(user.role){
        case Role.SUPER_ADMIN:
            statsData = getSuperAdminStatsData();
            break;
        case Role.ADMIN:
        case Role.DOCTOR:
        case Role.PATIENT:
    }
}

const getSuperAdminStatsData = async()=>{}

const getAdminStatsData = async()=>{}

const getDoctorStatsData = async () => { }

const getPatientStatsData = async()=>{}

