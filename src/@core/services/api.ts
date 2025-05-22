import axiosInstance from "../utils/axios"

export const getLiverateMini = async (limit?:number) => {
    let strLimit = ""
    if (limit) 
        strLimit = `?limit=${limit}`
    const resp = await axiosInstance.get(`/v2/liverate/mini${strLimit}`)
    return resp
}

export const getLiverateHighlights = async () => {
    const resp = await axiosInstance.get(`/v2/liverate/highlights`)
    return resp
}

export const getLiverateHighlightsBySlug = async (slug:string) => {
    const resp = await axiosInstance.get(`/v2/liverate?slug=${slug}`)
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

export const getOrderBook = async (symbol:string) => {
    const resp = await axiosInstance.get(`/v2/market/order-book?symbol=${symbol}`)
    return resp
}


export const getOrderTrade = async (symbol:string) => {
    const resp = await axiosInstance.get(`/v2/market/trades?symbol=${symbol}`)
    return resp
}

export const getPerpetualsInstrument = async () => {
    const resp = await axiosInstance.get(`/v1/perpetuals/instruments`)
    return resp
}