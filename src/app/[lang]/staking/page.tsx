import MainHeader from '@/@core/components/main-header'
import StakingHeaderSection from '@/@core/pages/staking/header-section'
import React from 'react'
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
import Footer from '@/@core/components/footer'

import '@/styles/staking.css'
 
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
      <head>
        {params.lang === 'id' && 
          <>
            <meta name="csrf-token" content="Od9Wvjka5zadRxNSTTJHnyRdpESrL2QQ1v2lROQG/zmxOZyXnBd1f2O9LZ+fKHw1eoMCpNqywWJjAPYbNuJi2g==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="Crypto Staking: Definisi, Panduan, Keuntungan &amp; Resiko - TRIV" name="title" />
            <meta content="Dapatkan passive income coin favorit anda hanya dengan 50rb bersama Triv Crypto Staking aplikasi anak bangsa Indonesia. Tanpa biaya admin, tanpa resiko dan terasuransi." name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Crypto Staking: Definisi, Panduan, Keuntungan &amp; Resiko - TRIV" property="og:title" />
            <meta content="Dapatkan passive income coin favorit anda hanya dengan 50rb bersama Triv Crypto Staking aplikasi anak bangsa Indonesia. Tanpa biaya admin, tanpa resiko dan terasuransi." property="og:description" />
            <meta content="https://triv.co.id/id/staking" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Crypto Staking: Definisi, Panduan, Keuntungan &amp; Resiko - TRIV" name="twitter:title" />
            <meta content="Dapatkan passive income coin favorit anda hanya dengan 50rb bersama Triv Crypto Staking aplikasi anak bangsa Indonesia. Tanpa biaya admin, tanpa resiko dan terasuransi." name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="1pae9s6Llnl+6eNzgl9LMp4dHIswSdrllKH1BQsXwlVecFTfa4YEMIAT3b5QRXCYwMO6a0HUf5chXKZa2fNftg==" />
            <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
            <link href="https://triv.co.id/id/staking" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id/staking" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en/staking" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/id/staking" hrefLang="x-default" rel="alternate" />
            <title>Crypto Staking: Definisi, Panduan, Keuntungan &amp; Resiko - TRIV</title>
          </>
        }
        {params.lang === 'en' &&
          <>
            <meta name="csrf-token" content="7gwbQB30ebV2LC9GodJts3AcCQqLZFBSI88M5Fbkkjdm6tFpuPnr/IjWEYtzyFYZLsKv6vr59SCWMl+7hAAP1A==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="Crypto Staking: Definition, Guide, Benefits &amp; Risks - TRIV" name="title" />
            <meta content="Get your favorite passive income coin for only 50 thousand with the Triv Crypto Staking application for Indonesian children. No admin fees, no risk and insured." name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Crypto Staking: Definition, Guide, Benefits &amp; Risks - TRIV" property="og:title" />
            <meta content="Get your favorite passive income coin for only 50 thousand with the Triv Crypto Staking application for Indonesian children. No admin fees, no risk and insured."  property="og:description" />
            <meta content="https://triv.co.id/en/staking" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Crypto Staking: Definition, Guide, Benefits &amp; Risks - TRIV" name="twitter:title" />
            <meta  content="Get your favorite passive income coin for only 50 thousand with the Triv Crypto Staking application for Indonesian children. No admin fees, no risk and insured." name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="nthIqxDapqpZ/6C/ItajvPzoXv9jHJ6ebqgR2WsvOIgWPoKCtdc046cFnnLwzJgWojb4HxKBO+zbVUKGuculaw==" />
            <link href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico" rel="icon" />
            <link href="https://triv.co.id/en/staking" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id/staking" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en/staking" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/en/staking" hrefLang="x-default" rel="alternate" />
            <title>Crypto Staking: Definition, Guide, Benefits &amp; Risks - TRIV</title>
          </>
        }

      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang}/>
        <main className='staking-page sm:mobile-responsive md:mobile-responsive light-theme'>
          <StakingHeaderSection objLang={header_section}/>
          <StakingBenefitSection objLang={benefit_section} />
          <StakingGuideCryptoSection objLang={guide_crypto_section}/>
          <StakingCalculatorSection objLang={calculator_section}/>
          <StakingCoinsSection stakings={stakings} objLang={coin_section}/>
          <StakingFaqSection objLang={faq_section}/>
          <StakingStartNowSection lang={params.lang} objLang={start_now_section}/>
          <StakingTestimonyCarouselSection />
        </main>
        <Footer />
      </body>
      
    </>
  )
}

