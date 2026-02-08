export interface TErrorSource{
    path: string;
    message: string;
}

export interface TErrorResponse{
    statusCode
    success: boolean;
    message: string;
    errorSources?: TErrorSource[];
    error?: unknown;
}