export interface ILiverateMini {
    currency: string,
    rate: number,
    change_24h: number,
    icon_url: string,
}


export interface ITopGainer {
    label: string,
    rate: number,
    change_24h: number,
    icon_url: string,
}

export interface IHighestVolume {
    label: string,
    rate: number,
    change_24h: number,
    icon_url: string,
}

export interface IMostPopular {
    label: string,
    rate: number,
    change_24h: number,
    icon_url: string,
}

export interface IHighlight {
    top_gainer: ITopGainer,
    highest_volume: IHighestVolume,
    most_popular: IMostPopular,
}

export interface ILiverate {
    label: string,
    currency: string,
    buy_rate: number,
    sell_rate: number,
    change_24h: number,
    icon_url: string,
}

export interface IStaking {
    label: string,
    currency: string,
    apy: number,
    icon_url: string,
}
