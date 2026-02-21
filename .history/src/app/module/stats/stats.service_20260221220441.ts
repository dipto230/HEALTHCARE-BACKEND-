import { Role } from "../../../generated/prisma/enums";
import { IRequestUser } from "../../interfaces/request.user.interface";

const getDashboardStatsData = async (user:IRequestUser) => {
    let statsData;
    switch(user.role){
        case Role.SUPER_ADMIN:
        case Role.ADMIN:
        case Role.DOCTOR:
    }
}

const getSuperAdminStatsData = async()=>{}

const getAdminStatsData = async()=>{}

const getDoctorStatsData = async () => { }

const getPatientStatsData = async()=>{}

