import axiosInstance from "../utils/axios"

export const getLiverateMini = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/mini`)
    return resp
}

export const getLiverateHighlights = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/highlights`)
    return resp
}

export const getLiverates = async () => {
    const resp = await axiosInstance.get(`/v2/liverate`)
    return resp
}

export const getStakings = async () => {
    const resp = await axiosInstance.get(`/v2/staking`)
    return resp
}

export const getBlogs = async () => {
    const resp = await axiosInstance.get(`/v2/blog`)
    return resp
}

export const getAsset = async (currency:string) => {
    const resp = await axiosInstance.get(`/v2/asset/${currency}`)
    return resp
}

export const getMarkets = async () => {
    const resp = await axiosInstance.get(`/v2/market`)
    return resp
}

export const getMarket = async (symbol:string) => {
    const resp = await axiosInstance.get(`/v2/market?symbol=${symbol}`)
    return resp
}