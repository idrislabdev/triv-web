"use client"

import MainHeader from '@/@core/components/main-header'
import React, { useCallback, useEffect } from 'react'
import StocksHeroSection from '../hero-section'
import StocksIndexCryptoSection from '../index-crypto-section'
import StocksEwalletSection from '../ewallet-section'
import Footer from '@/@core/components/footer'
import "@/styles/stocks-new.css"
import "@/styles/animations/stocks.css"

const StocksPageWrapper = (props: {lang: string, objLang:any, liverates:any}) => {
    const {lang, objLang, liverates} = props


    useEffect(() => {
        // window.addEventListener("scroll", onScroll, { passive: true });
        // const { scrollY } = window;
    });
    return (
        <>
            <MainHeader classText="header-white" lang={lang}/>
            <main className='stocks-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <StocksHeroSection lang={lang} objLang={objLang.hero_section}/>
                <StocksIndexCryptoSection liverates={liverates}/>
                {/* <StocksEwalletSection objLang={objLang.ewallet_section} /> */}
            </main>
            <Footer />
        </>
  )
}

export default StocksPageWrapper
