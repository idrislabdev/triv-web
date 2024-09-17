import MarketHeader from '@/@core/components/market-header'
import React from 'react'
import { getMarkets,getMarket, getOrderBook, getOrderTrade } from '@/@core/services/api'
import MarqueTextSection from '@/@core/pages/markets/marque-text-section';

import '@/styles/markets.css'
import MarketSection from '@/@core/pages/markets/market-section';
import MarketTableSection from '@/@core/pages/markets/table-section';
export default async function MarketsPage({ params }: any) {
    const respMarkets =  await getMarkets();
    const respMarket =  await getMarket(params.symbol);
    const respOrderBook =  await getOrderBook(params.symbol);
    const respTrade =  await getOrderTrade(params.symbol);

    const markets:any = respMarkets.data.data
    const market:any = respMarket.data.data
    const orderBook:any = respOrderBook.data.data
    const trades:any = respTrade.data.data

    const codeSymbol = `${market.base_asset.code} - ${market.quote_asset.code}`
    return (
      <html lang={params.lang}>
        <head>
          {params.lang === 'id' &&
            <>
              <meta name="csrf-token" content="+nRwZJ4B+iEn7GVcqQ3ZjFbwforvD5zcb3qMEAMCrDBykrpNOwxoaNkWW5F7F+ImCC7Yap6SOa7ah99P0eYx0w==" />
              <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
              <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
              <meta content={`Markets, Grafik Harga dan Trading ${codeSymbol} | Triv`} name="title" />
              <meta content="Dapatkan harga BTC to IDR terbaru, chart dan trading dengan mudah dalam 1 platform. Cepat &amp; aman hanya dalam hitungan detik 24 jam tanpa libur." name="description" />
              <meta content="origin-when-crossorigin" name="referrer" />
              <meta content="index, follow, noodp" name="robots" />
              <meta content="index, follow, noodp" name="googlebot" />
              <meta content="index, follow, noodp" name="msnbot" />
              <meta content="id_ID" property="og:locale" />
              <meta content="Triv" property="og:site_name" />
              <meta content="website" property="og:type" />
              <meta content={`Markets, Grafik Harga dan Trading ${codeSymbol} | Triv`} property="og:title" />
              <meta content="Dapatkan harga BTC to IDR terbaru, chart dan trading dengan mudah dalam 1 platform. Cepat &amp; aman hanya dalam hitungan detik 24 jam tanpa libur." property="og:description" />
              <meta content="https://triv.co.id/id/markets/BTC_IDR" property="og:url" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
              <meta content="196" property="og:image:width" />
              <meta content="82" property="og:image:height" />
              <meta content="summary_large_image" name="twitter:card" />
              <meta content={`Markets, Grafik Harga dan Trading ${codeSymbol} | Triv`} name="twitter:title" />
              <meta content="Dapatkan harga BTC to IDR terbaru, chart dan trading dengan mudah dalam 1 platform. Cepat &amp; aman hanya dalam hitungan detik 24 jam tanpa libur." name="twitter:description" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
              <meta name="csrf-param" content="authenticity_token" />
              <meta name="csrf-token" content="RR9vzH+gZWLZ6+fFZ33xHRAh8WWPWicoGaGTDAjUh1bN+aXl2q33KycR2Qi1Z8q3Tv9Xhf7HglqsXMBT2jAatQ==" />
              <meta name="action-cable-url" content="wss://ws.triv.co.id/cable?key=a830d1f85d8c47dfbd21b3935fd10e16" />
              <title>Markets, Grafik Harga dan Trading ${codeSymbol} | Triv</title>
            </>
          }
          {params.lang === 'en' &&
            <>
              <meta name="csrf-token" content="3i8ogDkIjUZHwsLfeGiDtAfau/YnHPlunmclxLUWaxdWyeKpnAUfD7k4/BKqcrgeWQQdFlaBXBwrmnabZ/L29A==" />
              <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
              <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
              <meta content={`Markets, Price Chart &amp; Trading ${codeSymbol} | TRIV`} name="title" />
              <meta content="Get the latest BTC prices up to IDR, charts and trade easily in 1 platform. Fast &amp; safe in just seconds 24 hours without holidays." name="description" />
              <meta content="origin-when-crossorigin" name="referrer" />
              <meta content="index, follow, noodp" name="robots" />
              <meta content="index, follow, noodp" name="googlebot" />
              <meta content="index, follow, noodp" name="msnbot" />
              <meta content="en_US" property="og:locale" />
              <meta content="Triv" property="og:site_name" />
              <meta content="website" property="og:type" />
              <meta content={`Markets, Price Chart &amp; Trading ${codeSymbol} | TRIV`} property="og:title" />
              <meta content="Get the latest BTC prices up to IDR, charts and trade easily in 1 platform. Fast &amp; safe in just seconds 24 hours without holidays." property="og:description" />
              <meta content="https://triv.co.id/en/markets/BTC_IDR" property="og:url" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
              <meta content="196" property="og:image:width" />
              <meta content="82" property="og:image:height" />
              <meta content="summary_large_image" name="twitter:card" />
              <meta content={`Markets, Price Chart &amp; Trading ${codeSymbol} | TRIV`} name="twitter:title" />
              <meta content="Get the latest BTC prices up to IDR, charts and trade easily in 1 platform. Fast &amp; safe in just seconds 24 hours without holidays." name="twitter:description" />
              <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
              <meta name="csrf-param" content="authenticity_token" />
              <meta name="csrf-token" content="NZRgdix1cQc+opert3ypMc7ivk/eRomOWZsKHwv+o4e9cqpfiXjjTsBYqWZlZpKbkDwYr6/bLPzsZllA2Ro+ZA==" />
              <meta name="action-cable-url" content="wss://ws.triv.co.id/cable?key=a830d1f85d8c47dfbd21b3935fd10e16" />
              <title>Markets, Price Chart &amp; Trading ${codeSymbol} | TRIV</title>
            </>
          }
        </head>
        <body>
          <main className='markets-page sm:mobile-responsive md:mobile-responsive light-theme'>
              <MarqueTextSection markets={markets}/>
              <MarketSection markets={markets} objMarket={market} lang={params.lang} objOrderBook={orderBook} trades={trades}/>
              <MarketTableSection lang={params.lang}/>
          </main>
        </body>
      </html>
    )
}

