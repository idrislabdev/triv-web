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
                <main className='stocks-page sm:mobile-responsive md:mobile-responsive light-theme'>
                    <StockRegisterSection lang={params.lang} objLang={register_section} />
                    <StocksDeviceSection />
                    <StocksWhySection objLang={why_section}/>
                    <StockRegulatedInsuredSection objLang={regulated_insured_section}/>
                    <StocksCalculatorSection objLang={calculator_section} />
                    <StocksEwalletSection objLang={ewallet_section} />
                    <StocksFaqSection objLang={faq_section}/>
                    <StocksRegisterNowSection objLang={register_now_section} />
                </main>
            <Footer />
        </>
  )
}

