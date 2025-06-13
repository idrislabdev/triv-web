import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FuturesListCoinSection = (props: {objLang:any, lang:string, prepsInstrument:any}) => {
    const { objLang, lang, prepsInstrument } = props
    const populars = [
        {img: '/images/coins/btc.png', name: 'BTCUSDT', detail: 'PERP 25x', val: 18.93},
        {img: '/images/coins/dash.png', name: 'DASHUSDT', detail: 'PERP 25x', val: 18.93},
        {img: '/images/coins/solana.png', name: 'SOLUSDT', detail: 'PERP 25x', val: -8.93},
        {img: '/images/coins/eth.png', name: 'ETHSUSDT', detail: 'PERP 25x', val: 18.93},
        {img: '/images/coins/arb.png', name: 'ARBUSDT', detail: 'PERP 25x', val: 18.93},
        {img: '/images/coins/near.png', name: 'NEARSUDT', detail: 'PERP 25x', val: -8.93},
    ]
    return (
        <section className='futures-list-coin-section'>
            <div className='main-container'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {lang == 'en' && objLang.title_3}</h2>
                <div className='subcontainer'>
                    <div className='list-coin'>
                        <h5>Popular ✨</h5>
                        <div className='coins'>
                            {prepsInstrument.map((item:any, index:number) => (
                                <Link href={`/${lang}/markets/${item.underlying_asset}_${item.settlement_asset}`} className='coin' key={index}>
                                    <div className='main-coin'>
                                        <Image src={item.icon_url} alt={item.symbol} width={0} height={0} sizes='100%' />
                                        <div className='detail-text'>
                                            <label>{item.underlying_asset}{item.settlement_asset}</label>
                                            <span>PERP {item.leverage}X</span>
                                        </div>
                                    </div>
                                    <label className={item.change_24h < 0 ? 'minus' : 'plus'}>
                                        {item.change_24h > 0 && <CaretUpIcon color={'#71BBED'} />}
                                        {item.change_24h < 0 && <CaretDownIcon color={'#EB5757'} />}
                                        {item.change_24h < 0 ? item.change_24h * -1 : item.change_24h}%
                                    </label>
                                </Link>
                            ))}
                        </div>
                        <Link href={`/${lang}/markets`}>View More</Link>
                    </div>
                    <div className='list-coin'>
                        <h5>New 🎉</h5>
                        <div className='coins'>
                            {prepsInstrument.map((item:any, index:number) => (
                                <Link href={`/${lang}/markets/${item.underlying_asset}_${item.settlement_asset}`} className='coin' key={index}>
                                    <div className='main-coin'>
                                        <Image src={item.icon_url} alt={item.symbol} width={0} height={0} sizes='100%' />
                                        <div className='detail-text'>
                                            <label>{item.underlying_asset}{item.settlement_asset}</label>
                                            <span>PERP {item.leverage}X</span>
                                        </div>
                                    </div>
                                    <label className={item.change_24h < 0 ? 'minus' : 'plus'}>
                                        {item.change_24h > 0 && <CaretUpIcon color={'#71BBED'} />}
                                        {item.change_24h < 0 && <CaretDownIcon color={'#EB5757'} />}
                                        {item.change_24h < 0 ? item.change_24h * -1 : item.change_24h}%
                                    </label>
                                </Link>
                            ))}
                        </div>
                        <Link href={`/${lang}/markets`}>View More</Link>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FuturesListCoinSection