export interface CommonResponse<T> {
    code: number,
    message: string,
    data: T
}

export interface CommonListResponse<T>{
    count: number,
    results: T[]
}

export type ListResponse<T> = CommonResponse<CommonListResponse<T>>;