import { ChevronIconDown } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react'
import axiosInstance from '@/@core/utils/axios'
import { IBookOrder, ITrade } from '@/@core/@types/interfaces'
import moment from 'moment';
import MarketsTvWrapper from '../../tv-wrapper'

const MarketMainContainer = (props: {market:any, setMarket:Dispatch<SetStateAction<any>>}) => {
    const {market, setMarket} = props
   
    return (
        <div className='market-container'>
            <div className='market-info'>
                <a>
                    <Image src={market.icon_url} alt={'market logo'}width={0} height={0} sizes='100%'/>
                    <span>{market.symbol}</span>
                    <ChevronIconDown color={'#000'} />
                </a>
                <div className='market-info-detail'>
                    <div className='info-detail'>
                        <span>924.223.300</span>
                    </div>
                    <div className='info-detail'>
                        <label>24H Change</label>
                        <span>+0,16%</span>
                    </div>
                    <div className='info-detail'>
                        <label>Tertinggi 24JAM</label>
                        <span>930.000.000</span>
                    </div>
                    <div className='info-detail'>
                        <label>Terendah 24JAM</label>
                        <span>880.811.000</span>
                    </div>
                    <div className='info-detail'>
                        <label>Vol 24JAM (IDR)</label>
                        <span>1,32B</span>
                    </div>
                    <div className='info-detail'>
                        <label>Vol 24JAM (BTC)</label>
                        <span>1,449025</span>
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
