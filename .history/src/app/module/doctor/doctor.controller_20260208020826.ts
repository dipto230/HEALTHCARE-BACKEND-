const createDoctor = catchAsync(
    async (req: Request, res: Response) => {
        const payload = req.body
        const result = await UserService.createDoctor(payload);

        sendResponse(res, {
            httpStatusCode: status.CREATED,
            success: true,
            message: "Doctor registered successfully",
            data:result  
        })
    }
)