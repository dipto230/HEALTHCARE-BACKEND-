import { ICreateSchedulePayload } from "./schedule.interface"

const createSchedule = async () => {
    
}

const getAllSchedules = async (payload:ICreateSchedulePayload) => {
    const { startDate, endDate, startTime, endTime } = payload;
    const interval = 30;
    const currentDate = new Date(startDa)
    

}








export const ScheduleService = {
    createSchedule,
    getAllSchedules,
}