export interface TErrorSource{
    path: string;
    message: string;
}

export interface TErrorResponse{
    st
    success: boolean;
    message: string;
    errorSources?: TErrorSource[];
    error?: unknown;
}