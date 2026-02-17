import { ICreateSchedulePayload } from "./schedule.interface"
import { addHours, addMinutes, format } from "date-fns";
import { convertDateTime } from "./schedule.utils";
import { prisma } from "../../lib/prisma";

const createSchedule = async () => {
    
}

const getAllSchedules = async (payload: ICreateSchedulePayload) => {
   
}








export const ScheduleService = {
    createSchedule,
    getAllSchedules,
}