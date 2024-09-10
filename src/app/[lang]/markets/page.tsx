import MarketHeader from '@/@core/components/market-header'
import React from 'react'
import { getMarket } from '@/@core/services/api'
import MarqueTextSection from '@/@core/pages/markets/marque-text-section';

import '@/styles/markets.css'
import MarketSection from '@/@core/pages/markets/market-section';
import MarketTableSection from '@/@core/pages/markets/table-section';
export default async function MarketsPage({ params }: any) {
    const respMarket =  await getMarket();
    const markets:any = respMarket.data.data
    return (
      <>
        <main className='markets-page sm:mobile-responsive light-theme'>
            <MarketHeader lang={params.lang} />
            <MarqueTextSection markets={markets}/>
            <MarketSection markets={markets} lang={params.lang}/>
            <MarketTableSection lang={params.lang}/>
        </main>
      </>
    )
}

