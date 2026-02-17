import { ICreateSchedulePayload } from "./schedule.interface"
import { addHours, addMinutes, format } from "date-fns";

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
            addMinutes(
                addHours(
                      `${format(currentDate, "yyyy-MM-dd")}`,
                    Number(startTime.split(":")[0])
                ),
                Number(startTime.split(":")[1])
            )
        )
    }
    

}








export const ScheduleService = {
    createSchedule,
    getAllSchedules,
}