import { ICreateSchedulePayload } from "./schedule.interface"

const createSchedule = async () => {
    
}

const getAllSchedules = async (payload:ICreateSchedulePayload) => {
    const { startDate, endDate, startTime, endTime } = payload;
    const interval = 30;
    const currentDate = new Date(startDate)
    const lastDate = new Date(endDate)
    const schedule =[]
    while (currentDate <= lastDate) {
        const startDateTime = new Date(
            
        )
    }
    

}








export const ScheduleService = {
    createSchedule,
    getAllSchedules,
}