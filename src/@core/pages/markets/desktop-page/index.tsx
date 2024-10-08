"use client"

import React from 'react'
import MarqueTextSection from '../marque-text-section'
import MarketSection from '../market-section'
import MarketTableSection from '../table-section'
import { GlobalsProvider } from '@/@core/context/globalContext'
import MarketHeader from '@/@core/components/market-header'

const MarketDesktopPage = (props: {markets:any, market:any, lang:string, orderBook:any, trades:any}) => {
    const { markets, market, lang, orderBook, trades} = props
  return (
    <GlobalsProvider>
        <MarketHeader lang={lang} />
        <main className='markets-page sm:mobile-responsive md:mobile-responsive light-theme'>
            <MarqueTextSection markets={markets}/>
            <MarketSection markets={markets} objMarket={market} lang={lang} objOrderBook={orderBook} trades={trades}/>
            <MarketTableSection lang={lang}/>
        </main>
    </GlobalsProvider>

  )
}

export default MarketDesktopPage
