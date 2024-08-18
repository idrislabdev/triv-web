import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import StocksRegisterNowSection from '@/@core/pages/stocks/register-now-section'
import '@/styles/stocks.css'
import { getDictionariesStocks } from '@/app/dictionaries'
import StocksFaqSection from '@/@core/pages/stocks/faq-section'
import StocksEwalletSection from '@/@core/pages/stocks/ewallet-section'

export default async function Stocks({ params }: any) {

    const {
        ewallet_section,
        faq_section,
        register_now_section 
    } = await getDictionariesStocks(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='stocks-page sm:mobile-responsive light-theme'>
                    <StocksEwalletSection langObj={ewallet_section} />
                    <StocksFaqSection langObj={faq_section}/>
                    <StocksRegisterNowSection langObj={register_now_section} />
                </main>
            <Footer />
        </>
  )
}

