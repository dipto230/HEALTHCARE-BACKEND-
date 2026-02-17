import { catchAsync } from "../../shared/catchAsync";
import { Request, Response } from "express";
import status from "http-status";
import { ScheduleService } from "./schedule.service";
import { IQueryParams } from "../../interfaces/query.interface";
import { sendResponse } from "../../shared/sendResponse";

const getAllSchedules = catchAsync( async (req : Request, res : Response) => {
    const query = req.query;
    const result = await ScheduleService.getAllSchedules(query as IQueryParams);
    sendResponse(res, {
        success: true,
        httpStatusCode: status.OK,
        message: 'Schedules retrieved successfully',
        data: result.data,
        meta: result.meta
    });
});

export const ScheduleController = {
    
    getAllSchedules,
  
}