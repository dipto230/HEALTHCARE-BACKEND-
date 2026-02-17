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