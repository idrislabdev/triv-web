import MainHeader from '@/@core/components/main-header'
import StakingHeaderSection from '@/@core/pages/staking/header-section'
import React from 'react'

import '@/styles/staking.css'
import StakingBenefitSection from '@/@core/pages/staking/benefit-section'
import StakingGuideCryptoSection from '@/@core/pages/staking/guide-crypto-section'
import StakingFaqSection from '@/@core/pages/staking/faq-section'
import StakingStartNowSection from '@/@core/pages/staking/start-now-section'
import StakingTestimonyCarouselSection from '@/@core/pages/staking/testimony-carousel-section'
 
export default async function  Staking() {
  return (
    <>
      <MainHeader classText="header-white" />
      <main className='staking-page light-theme'>
        <StakingHeaderSection />
        <StakingBenefitSection />
        <StakingGuideCryptoSection />
        <StakingFaqSection />
        <StakingStartNowSection />
        <StakingTestimonyCarouselSection />
      </main>
    </>
  )
}

