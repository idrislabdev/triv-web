import React from 'react'
import { ArrowRightIcon, ChartPie, ChartPie2, ChartPPT, ChevronIconDown, TrendChartIcon, TrendChartIcon2 } from '@/@core/components/custom-icons'
import LiverateCoinChartWrapper from '../../coin-chart-wrapper'
import CardNewsBlog from '@/@core/components/cards/card-news-blog'
import { IBlog, ICoin } from '@/@core/@types/interfaces'

const CoinMainContainer = (props: {lang:string, objLang:any, blogs:IBlog[], asset:any, coin:ICoin}) => {
    const { lang, objLang, blogs, asset, coin } = props
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
    const progressJual = `w-[${(asset.key_statistic.sell*100).toFixed(0)}%]`;
    const progressBeli = `w-[${(asset.key_statistic.buy*100).toFixed(0)}%]`;
    return (
        <div className='coin-main-container'>
            <div className='chart-subcontainer'>
                <LiverateCoinChartWrapper symbol={coin.symbol} />
            </div>
            <div className='about-subcontainer'>
                <h5>Tentang {asset.label}</h5>
                <p>{asset.about}</p>
                <a>Website Resmi <ArrowRightIcon color={'#fff'} /></a>
            </div>
            <div className='activity-subcontainer'>
                <h5>Aktivitas Pengguna Triv</h5>
                <div className='progress-cubcontainer'>
                    <div className='key-progress'>
                        <span className={`${progressBeli} progress-beli`}></span>
                        <span className={`${progressJual} progress-jual`}></span>
                    </div>
                    <div className='key-progress-label'>
                        <label className='progress-beli'><span className='progress-beli'></span>{(asset.key_statistic.buy * 100).toFixed(0)}% Beli</label>
                        <label className='progress-jual'><span className='progress-jual'></span>{(asset.key_statistic.sell * 100).toFixed(0)}% Jual</label>
                    </div>
                </div>
                <p>Aktivitas beli dan jual {asset.code} seluruh pengguna Triv dalam 24 jam terakhir. Hal ini menunjukkan Trivuser tertarik pada aset, namun bukan ajakan untuk membeli atau menjual aset</p>
            </div>
            <div className='key-subcontainer'>
                <h5>Key Statistic</h5>
                <div className='key-statistic-subcontainer'>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <TrendChartIcon2 color={'#fff'} />
                            <label>Kapasitas Pasar</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.market_cap, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <TrendChartIcon color={'#fff'} />
                            <label>Nilai Terdilusi Penuh</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.fully_diluted_valuation, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPie color={'#fff'} />
                            <label>Suplai Yang Beredar</label>
                        </div>
                        <p>{nFormatter(asset.key_statistic.circulating_supply, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPie2 color={'#fff'} />
                            <label>Suplai Maksimum</label>
                        </div>
                        <p className='!text-[#71BBED]'>{nFormatter(asset.key_statistic.max_supply, 1)}</p>
                    </div>
                    <div className='key-statistic'>
                        <div className='key-statistic-label'>
                            <ChartPPT color={'#fff'} />
                            <label>Volume Global</label>
                        </div>
                        <p className='!text-[#EB5757]'>{nFormatter(asset.key_statistic.volume_24h, 1)}</p>
                    </div>
                </div>
            </div>
            <div className='blog-subcontainer'>
            {
                blogs.map((item:any, index:number) => (
                <CardNewsBlog lang={lang} item={item} key={index}/>
                ))
            }
            </div>
        </div>
    )
}

export default CoinMainContainer
