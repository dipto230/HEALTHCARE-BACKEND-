import status from "http-status";
import { PaymentStatus, Role } from "../../../generated/prisma/enums";
import { IRequestUser } from "../../interfaces/request.user.interface";
import AppError from "../../middleware/AppError";
import { prisma } from "../../lib/prisma";

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
    const appointmentCount = await prisma.appointment.count();
     const doctorCount = await prisma.doctor.count();
    const patientCount = await prisma.patient.count();
    const adminCount = await prisma.admin.count();
    const paymentCount = await prisma.payment.count();
    const userCount = await prisma.user.count();
     const totalRevenue = await prisma.payment.aggregate({
        _sum: { amount: true},
        where:{
            status: PaymentStatus.PAID
        }
     });
    const pieChartData = await getPieChartData();
    const barChartData = await getBarChartData();
     const superAdminCount = await prisma.admin.count({
        where: {
            user: {
                role: Role.SUPER_ADMIN
            }
        }
     });
    return {
         appointmentCount,
        doctorCount,
        patientCount, 
        superAdminCount,  
        adminCount,
        paymentCount,
        userCount,
        totalRevenue: totalRevenue._sum.amount || 0,
        pieChartData,
        barChartData
    }



}

const getAdminStatsData = async()=>{}

const getDoctorStatsData = async () => { }

const getPatientStatsData = async()=>{}

