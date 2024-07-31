import axiosInstance from "../utils/axios"

export const getLiverateMini = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/mini`)
    return resp
}