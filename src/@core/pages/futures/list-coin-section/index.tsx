import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const FuturesListCoinSection = (props: {objLang:any}) => {
    const { objLang } = props
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
                <h2>{objLang.title_1} <span>{objLang.title_2}</span></h2>
                <div className='subcontainer'>
                    <div className='list-coin'>
                        <h5>Popular ✨</h5>
                        <div className='coins'>
                            {populars.map((item, index:number) => (
                                <div className='coin' key={index}>
                                    <div className='main-coin'>
                                        <Image src={item.img} alt={item.name} width={0} height={0} sizes='100%' />
                                        <div className='detail-text'>
                                            <label>{item.name}</label>
                                            <span>{item.detail}</span>
                                        </div>
                                    </div>
                                    <label className={item.val < 0 ? 'minus' : 'plus'}>
                                        {item.val > 0 && <CaretUpIcon color={'#71BBED'} />}
                                        {item.val < 0 && <CaretDownIcon color={'#EB5757'} />}
                                        {item.val < 0 ? item.val * -1 : item.val}%
                                    </label>
                                </div>
                            ))}
                        </div>
                        <a>View More</a>
                    </div>
                    <div className='list-coin'>
                        <h5>New 🎉</h5>
                        <div className='coins'>
                            {populars.map((item, index:number) => (
                                <div className='coin' key={index}>
                                    <div className='main-coin'>
                                        <Image src={item.img} alt={item.name} width={0} height={0} sizes='100%' />
                                        <div className='detail-text'>
                                            <label>{item.name}</label>
                                            <span>{item.detail}</span>
                                        </div>
                                    </div>
                                    <label className={item.val < 0 ? 'minus' : 'plus'}>
                                        {item.val > 0 && <CaretUpIcon color={'#71BBED'} />}
                                        {item.val < 0 && <CaretDownIcon color={'#EB5757'} />}
                                        {item.val < 0 ? item.val * -1 : item.val}%
                                    </label>
                                </div>
                            ))}
                        </div>
                        <a>View More</a>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default FuturesListCoinSection