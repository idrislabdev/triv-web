import MarketHeader from '@/@core/components/market-header'
import React from 'react'
import { getMarket, getMarkets, getOrderBook, getOrderTrade } from '@/@core/services/api'
import MarqueTextSection from '@/@core/pages/markets/marque-text-section';

import '@/styles/markets.css'
import MarketSection from '@/@core/pages/markets/market-section';
import MarketTableSection from '@/@core/pages/markets/table-section';
export default async function MarketsPage({ params }: any) {
    const respMarkets =  await getMarkets();
    const respMarket =  await getMarket('BTC_IDR');
    const respOrderBook =  await getOrderBook('BTC_IDR');
    const respTrade =  await getOrderTrade('BTC_IDR');
    const markets:any = respMarkets.data.data
    const market:any = respMarket.data.data
    const orderBook:any = respOrderBook.data.data
    const trades:any = respTrade.data.data

    return (
      <>
        <main className='markets-page sm:mobile-responsive md:mobile-responsive light-theme'>
            <MarqueTextSection markets={markets}/>
            <MarketSection markets={markets} objMarket={market} lang={params.lang} objOrderBook={orderBook} trades={trades}/>
            <MarketTableSection lang={params.lang}/>
        </main>
      </>
    )
}

