"use client"

import React, { useState } from 'react'
import MarketFormContainer from './form-container'
import MarketMainContainer from './main-container'
import MarketOrderBookContainer from './order-book-container'


const MarketSection = (props: {markets:any, lang:string}) => {
    const { markets, lang } = props
    const [market, setMarket] = useState(markets[0]);
    const [tabLimit, setTabLimit] = useState('limits');
    const [tabinfo, setTabInfo] = useState('limit');

    return (
        <section className='market-section'>
            <MarketMainContainer market={market} setMarket={setMarket} />
            <MarketOrderBookContainer  market={market} setMarket={setMarket} />
            <MarketFormContainer lang={lang} tabLimit={tabLimit} setTabLimit={setTabLimit} tabInfo={tabinfo} setTabInfo={setTabInfo}/>
        </section>
    )
}

export default MarketSection

