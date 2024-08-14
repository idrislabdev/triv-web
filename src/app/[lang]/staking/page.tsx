import MainHeader from '@/@core/components/main-header'
import StakingHeaderSection from '@/@core/pages/staking/header-section'
import React from 'react'

import '@/styles/staking.css'
import StakingBenefitSection from '@/@core/pages/staking/benefit-section'
import StakingGuideCryptoSection from '@/@core/pages/staking/guide-crypto-section'
import StakingFaqSection from '@/@core/pages/staking/faq-section'
import StakingStartNowSection from '@/@core/pages/staking/start-now-section'
import StakingTestimonyCarouselSection from '@/@core/pages/staking/testimony-carousel-section'
import StakingCoinsSection from '@/@core/pages/staking/coins-section'
import { getStakings } from '@/@core/services/api'
import { IStaking } from '@/@core/@types/interfaces'
import StakingCalculatorSection from '@/@core/pages/staking/calculator-section'

import { getDictionaryStaking } from "@/app/dictionaries";

 
export default async function  Staking({ params }: any) {
  const respStaking =  await getStakings();
  const stakings:IStaking[] = respStaking.data.data

  const {
    header_section, 
    benefit_section, 
    guide_crypto_section, 
    calculator_section, 
    coin_section, 
    faq_section, 
    start_now_section
  } = await getDictionaryStaking(params.lang);


  return (
    <>
      <MainHeader classText="header-white" lang={params.lang}/>
      <main className='staking-page sm:mobile-responsive light-theme'>
        <StakingHeaderSection lang={header_section}/>
        <StakingBenefitSection lang={benefit_section} />
        <StakingGuideCryptoSection lang={guide_crypto_section}/>
        <StakingCalculatorSection lang={calculator_section}/>
        <StakingCoinsSection stakings={stakings} lang={coin_section}/>
        <StakingFaqSection lang={faq_section}/>
        <StakingStartNowSection lang={start_now_section}/>
        <StakingTestimonyCarouselSection />
      </main>
    </>
  )
}

