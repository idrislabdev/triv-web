import MainHeader from '@/@core/components/main-header'
import React from 'react'
import LiverateHeaderSection from '@/@core/pages/liverate/header-section'
import LiverateTopMoverSection from '@/@core/pages/liverate/top-mover-section'
import LiverateListSection from '@/@core/pages/liverate/list-liverate-section'
import LiverateAskSection from '@/@core/pages/liverate/ask-section'
import LiverateInvestasiNowSection from '@/@core/pages/liverate/investasi-now-section'
import LiverateTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section'
import Footer from '@/@core/components/footer'

import { getLiverateHighlights, getLiverates } from '@/@core/services/api'
import { IHighlight, ILiverate } from '@/@core/@types/interfaces'
import { getDictionaryLierate } from '@/app/dictionaries'

import '@/styles/liverate.css'

export default async function  Liverate({ params }: any) {
    const resp =  await getLiverateHighlights();
    const hightlight:IHighlight = resp.data.data

    const respLiverate =  await getLiverates();
    const liverates:ILiverate[] = respLiverate.data.data

    const {
      header_section,
      topmovers_section,
      invest_section,
    } = await getDictionaryLierate(params.lang);

    return (
    <>
        <MainHeader classText="header-white" lang={params.lang}/>
        <main className='liverate-page sm:mobile-responsive light-theme'>
          <LiverateHeaderSection objLang={header_section}/>
          <LiverateTopMoverSection lang={params.lang} objLang={topmovers_section} hightlight={hightlight}/>
          <LiverateListSection liverates={liverates}/>
          <LiverateAskSection />
          <LiverateInvestasiNowSection lang={params.lang} objLang={invest_section}/>
          <LiverateTestimonyCarouselSection />
        </main>
        <Footer />
    </>
  )
}
