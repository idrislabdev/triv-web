export interface ILiverateMini {
  currency: string;
  code: string;
  label: string;
  rate: number;
  change_24h: number;
  icon_url: string;
  slug: string;
}

export interface ITopGainer {
  label: string;
  rate: number;
  change_24h: number;
  icon_url: string;
  slug: string;
}

export interface IHighestVolume {
  label: string;
  rate: number;
  change_24h: number;
  icon_url: string;
  slug: string;
}

export interface IMostPopular {
  label: string;
  rate: number;
  change_24h: number;
  icon_url: string;
  slug: string;
}

export interface IHighlight {
  top_gainer: ITopGainer;
  highest_volume: IHighestVolume;
  most_popular: IMostPopular;
}

export interface ILiverate {
  label: string;
  currency: string;
  buy_rate: number;
  sell_rate: number;
  change_24h: number;
  icon_url: string;
  slug: string;
  symbol: string;
}

export interface IStaking {
  label: string;
  currency: string;
  apy: number;
  icon_url: string;
}

export interface IBlog {
  title: string;
  description: string;
  published_at: Date;
  image_url: string;
  link: string;
  categories: string;
}

export interface ICoin {
  slug: string;
  symbol: string;
  currency: string;
}

export interface IBookOrder {
  price: number;
  qty: number;
  total: number;
  progress: number;
}

export interface ITrade {
  id: number;
  price: number;
  quantity: number;
  timestamp: number;
}

export interface IMetaTable {
  page: number;
  per: number;
  data_count: number;
  total_count: number;
  page_count: number;
}
