import { ChartPie, ChartPie2, ChartPPT, TrendChartIcon, TrendChartIcon2 } from '@/@core/components/custom-icons';
import Image from 'next/image';
import React from 'react'

const CoinTradeOverview = (props: {lang:string, objLang:any, asset:any}) => {
    const { lang, objLang, asset } = props
    const nFormatter = (num:number, digits:number) => {
        const lookup = [
          { value: 1, symbol: "" },
          { value: 1e3, symbol: "Rb" },
          { value: 1e6, symbol: "Jt" },
          { value: 1e9, symbol: "M" },
          { value: 1e12, symbol: "T" },
          { value: 1e15, symbol: "KT" },
          { value: 1e18, symbol: "OT" }
        ];
        const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
        const item = lookup.findLast(item => num >= item.value);
        return item ? (num / item.value).toFixed(digits).replace(regexp, "").concat(item.symbol) : "0";
    }
    const progressJual = (asset.key_statistic.sell*100).toFixed(0);
    const progressBeli = (asset.key_statistic.buy*100).toFixed(0);
    return (
        <div className='overview-area'>
            <div className='activity-subcontainer'>
                <h5>{objLang.activity}</h5>
                <div className='progress-cubcontainer'>
                    <div className='key-progress'>
                        <span className={`${progressBeli} progress-beli`} style={{width: `${progressBeli}%`}}></span>
                        <span className={`${progressJual} progress-jual`} style={{width: `${progressJual}%`}}></span>
                    </div>
                    <div className='key-progress-label'>
                        <label className='progress-beli'><span className='progress-beli'></span>{(asset.key_statistic.buy * 100).toFixed(0)}% {objLang.buy}</label>
                        <label className='progress-jual'><span className='progress-jual'></span>{(asset.key_statistic.sell * 100).toFixed(0)}% {objLang.sell}</label>
                    </div>
                </div>
                <p>
                    {objLang.trade_overview.header.replaceAll("__code__", asset.code)}
                </p>
            </div>
            <div className='trade-stake-subcontainer'>
                <div className='card-trade-stake'>
                    <div className='description'>
                        <div className='title'>
                            <h5>{asset.label} Stake</h5>
                            <p>{objLang.trade_overview.stake.replaceAll("__label__", asset.label)}</p>
                        </div>
                        <button>Stake</button>
                    </div>
                    <Image src='/images/3d-icons/brankas-new-vector.png' className='brankas' alt='brankas' width={0} height={0} sizes='100%'/>
                </div>
                <div className='card-trade-stake'>
                    <div className='description'>
                        <div className='title'>
                            <h5>{asset.label} Market</h5>
                            <p>{objLang.trade_overview.market.replaceAll("__label__", asset.label)}</p>
                        </div>
                        <button>Trade</button>
                    </div>
                    <Image src='/images/3d-icons/iphone-new-vector.png' className='iphone-vector' alt='iphone vector' width={0} height={0} sizes='100%'/>
                </div>
            </div>
            <div className='key-subcontainer'>
                <h5>Key Statistic</h5>
                <div className='key-statistic-subcontainer'>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <TrendChartIcon2 color={'#fff'} />
                            <label>{objLang.market_activity}</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.market_cap, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <TrendChartIcon color={'#fff'} />
                            <label>{objLang.full_value}</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.fully_diluted_valuation, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPie color={'#fff'} />
                            <label>{objLang.supply_circulate}</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.circulating_supply, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPie2 color={'#fff'} />
                            <label>{objLang.supply_maksimum}</label>
                        </div>
                        <p className='text-plus'>{nFormatter(asset.key_statistic.max_supply, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPPT color={'#fff'} />
                            <label>{objLang.volume_global}</label>
                        </div>
                        <p className='text-minus'>{nFormatter(asset.key_statistic.volume_24h, 1)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinTradeOverview