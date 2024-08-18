import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'
import StocksRegisterNowSection from '@/@core/pages/stocks/register-now-section'
import '@/styles/stocks.css'
import { getDictionariesStocks } from '@/app/dictionaries'
import StocksFaqSection from '@/@core/pages/stocks/faq-section'
import StocksEwalletSection from '@/@core/pages/stocks/ewallet-section'
import StocksCalculatorSection from '@/@core/pages/stocks/calculator-section'
import StockRegulatedInsuredSection from '@/@core/pages/stocks/regulated-insured-section'
import StocksWhySection from '@/@core/pages/stocks/why-section/page'
import StocksDeviceSection from '@/@core/pages/stocks/device-section'
import StockRegisterSection from '@/@core/pages/stocks/register-section'

export default async function Stocks({ params }: any) {

    const {
        register_section,
        why_section,
        regulated_insured_section,
        calculator_section,
        ewallet_section,
        faq_section,
        register_now_section 
    } = await getDictionariesStocks(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='stocks-page sm:mobile-responsive light-theme'>
                    <StockRegisterSection lang={params.lang} langObj={register_section} />
                    <StocksDeviceSection />
                    <StocksWhySection langObj={why_section}/>
                    <StockRegulatedInsuredSection langObj={regulated_insured_section}/>
                    <StocksCalculatorSection langObj={calculator_section} />
                    <StocksEwalletSection langObj={ewallet_section} />
                    <StocksFaqSection langObj={faq_section}/>
                    <StocksRegisterNowSection langObj={register_now_section} />
                </main>
            <Footer />
        </>
  )
}

