import { ICreateSchedulePayload } from "./schedule.interface"

const createSchedule = async () => {
    
}

const getAllSchedules = async (payload:ICreateSchedulePayload) => {
    const { startDate, endDate, startTime, endTime } = payload;
    

}








export const ScheduleService = {
    createSchedule,
    getAllSchedules,
    getScheduleById,
    updateSchedule,
    deleteSchedule
}