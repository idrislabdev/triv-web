"use client"

import React, { useState } from 'react'
import MarketFormContainer from './form-container'
import MarketMainContainer from './main-container'
import MarketOrderBookContainer from './order-book-container'
import { getOrderBook } from '@/@core/services/api'


const MarketSection = (props: {markets:any, objMarket:any, lang:string, objOrderBook:any, trades:any}) => {
    const { markets, objMarket, lang, objOrderBook, trades } = props
    const [market, setMarket] = useState(objMarket);
    const [orderBook, setOrderBook] = useState(objOrderBook);
    const [tabLimit, setTabLimit] = useState('limits');
    const [tabinfo, setTabInfo] = useState('limit');

    
    return (
        <section className='market-section'>
            <MarketMainContainer markets={markets} market={market} setMarket={setMarket} />
            <MarketOrderBookContainer  market={market} setMarket={setMarket} orderBook={orderBook} trades={trades}/>
            <MarketFormContainer lang={lang} tabLimit={tabLimit} setTabLimit={setTabLimit} tabInfo={tabinfo} setTabInfo={setTabInfo}/>
        </section>
    )
}

export default MarketSection

