"use client"

import MainHeader from '@/@core/components/main-header'
import React from 'react'
import StakingHeroSection from '../hero-section'
import StakingBenefitSection from '../benefit-section'
import StakingGuideCryptoSection from '../guide-crypto-section'
import StakingCalculatorSection from '../calculator-section'
import StakingCoinsSection from '../coins-section'
import StakingFaqSection from '../faq-section'
import StakingBannerSection from '../banner-section'
import Footer from '@/@core/components/footer'
import '@/styles/staking.css'
import '@/styles/animations/staking.css'

const StakingPage = (props: {lang:string, objLang:any, stakings:any}) => {
    const { lang, objLang, stakings} = props
    return (
        <>
            <MainHeader classText="header-transparent" lang={lang}/>
            <main className='staking-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <StakingHeroSection objLang={objLang.header_section}/>
                <StakingBenefitSection objLang={objLang.benefit_section} />
                <StakingGuideCryptoSection objLang={objLang.guide_crypto_section}/>
                <StakingCalculatorSection stakings={stakings} objLang={objLang.calculator_section}/>
                <StakingCoinsSection stakings={stakings} objLang={objLang.coin_section}/>
                <StakingFaqSection objLang={objLang.faq_section}/>
                <StakingBannerSection objLang={objLang.start_now_section}/>
            </main>
            <Footer />
        </>
    )
}

export default StakingPage
