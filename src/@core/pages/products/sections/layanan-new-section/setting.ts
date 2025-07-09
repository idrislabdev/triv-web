interface FeatureMap {
  swap: boolean;
  hodl: boolean;
  kirim: boolean;
  jual_beli: boolean;
  terima: boolean;
}

interface Settings {
  [token: string]: FeatureMap;
}

const settings: Settings = {
  bitcoin: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  ethereum: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  stellar: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  ripple: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  vaulta: {
    swap: true,
    hodl: false,
    kirim: false,
    jual_beli: true,
    terima: false,
  },
  litecoin: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  dash: { swap: true, hodl: true, kirim: true, jual_beli: true, terima: true },
  tetherusd: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  chainlink: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  dogecoin: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  bnb: { swap: true, hodl: true, kirim: true, jual_beli: true, terima: true },
  maticpolygon: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  shibainu: {
    swap: true,
    hodl: false,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  polkadot: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  cardano: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  solana: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  axieinfinity: {
    swap: true,
    hodl: true,
    kirim: true,
    jual_beli: true,
    terima: true,
  },
  tron: { swap: true, hodl: true, kirim: true, jual_beli: true, terima: true },
  pepe: {
    swap: true,
    hodl: false,
    kirim: false,
    jual_beli: true,
    terima: false,
  },
  hyperliquid: {
    swap: true,
    hodl: false,
    kirim: false,
    jual_beli: true,
    terima: false,
  },
};

export default settings;
