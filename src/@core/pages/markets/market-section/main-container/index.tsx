import { ChevronIconDown, SearchIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import axiosInstance from '@/@core/utils/axios'
import { IBookOrder, ITrade } from '@/@core/@types/interfaces'
import moment from 'moment';
import MarketsTvWrapper from '../../tv-wrapper'
import { usePathname, useRouter } from 'next/navigation';

const MarketMainContainer = (props: {markets:any, market:any, setMarket:Dispatch<SetStateAction<any>>}) => {
    const {markets, market, setMarket} = props
    const [showMarket, setShowMarket] = useState(false)
    const pathname = usePathname()
    const router = useRouter();
    const searchDropdown: any = useRef(null);

    const selectMarket = (val:string) => {
        let paths = pathname.split("/")
        paths[3] = val
        router.push(paths.join("/"))
    }

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

    useEffect(() => {
        // if (!showMarket) return;
        function handleClick(event : MouseEvent) {
            if (searchDropdown.current && !searchDropdown.current.contains(event.target)) {
                setShowMarket(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
      }, [showMarket]);

    return (
        <div className='market-container'>
            <div className='market-info'>
                <div className='market-symbol' ref={searchDropdown}>
                    <a onClick={_ => setShowMarket(!showMarket)}>
                        <Image src={market.icon_url} alt={'market logo'}width={0} height={0} sizes='100%'/>
                        <span className='truncate'>{market.symbol}</span>
                        <span className={`transition-all duration-300 ${showMarket ? 'rotate-180': ''}`}><ChevronIconDown color={'#000'} /></span>
                    </a>
                    <div className='info-detail'>
                        <span>{market.price}</span>
                    </div>
                    <div className={`dropdown-market ${showMarket ? 'show' : ''}`}>
                        <div className='header-area'>
                            <div className='group-input append'>
                                <span className='append'><SearchIcon color={'#fff'} /></span>
                                <input className='color-2' placeholder='Cari market'/>
                            </div>
                        </div>
                        <div className='body-area'>
                            <div className='table-header'>
                                <div className='table-header-row'>
                                    <div className='wrapper-row'>
                                        <label>Market</label>
                                        <label className='text-right'>Harga (IDR)</label>
                                        <label className='text-right'>24H Chg</label>
                                        <label className='text-right'>Vol 24H (IDR)</label>
                                    </div>
                                </div>
                            </div>
                            <div className='table-body'>
                            {
                                markets.map((item:any, index:number)=> (
                                    <div className='table-body-row' onClick={_ => selectMarket(item.symbol)} key={index}>
                                        <div className='wrapper-row'>
                                            <label>{item.base_asset.code}<span className='text-neutral-400'>/{item.quote_asset.code}</span></label>
                                            <label className='text-right'>{item.price}</label>
                                            <label className='text-right !text-[#EB5757]'>{item.price_changes !== null ? item.price_changes.today : ''}%</label>
                                            <label className='text-right'>{nFormatter(item.statistic.base_volume, 1)}</label>
                                        </div>
                                    </div>
                                ))
                            }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='market-info-detail'>
                    <div className='info-detail'>
                        <label>24H Change</label>
                        <span>{market.price_changes.today}%</span>
                    </div>
                    <div className='info-detail'>
                        <label>Tertinggi 24JAM</label>
                        <span>{nFormatter(market.statistic.high,0)}</span>
                    </div>
                    <div className='info-detail'>
                        <label>Terendah 24JAM</label>
                        <span>{nFormatter(market.statistic.low,1)}</span>
                    </div>
                    <div className='info-detail'>
                        <label>Vol 24JAM ({market.quote_asset.code})</label>
                        <span>{nFormatter(market.statistic.quote_volume.toFixed(market.quote_asset.precision),1)}</span>
                    </div>
                    <div className='info-detail'>
                        <label>Vol 24JAM ({market.base_asset.code})</label>
                        <span>{nFormatter(market.statistic.base_volume.toFixed(market.base_asset.precision), 1)}</span>
                    </div>
                </div>
            </div>
            <div className='market-tv-wrapper'>
                <MarketsTvWrapper symbol={market.symbol.replace("_", "")} />
            </div>
        </div>
    )
}

export default MarketMainContainer
