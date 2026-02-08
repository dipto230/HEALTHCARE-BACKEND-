export interface TErrorSource{
    path: string;
    message: string;
}

interface TErrorResponse{
    success: boolean;
    message: string;
    errorSource?: TErrorSource[];
    error?: unknown;
}