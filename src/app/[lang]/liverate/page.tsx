import MainHeader from '@/@core/components/main-header'
import React from 'react'
import LiverateHeaderSection from '@/@core/pages/liverate/header-section'
import LiverateTopMoverSection from '@/@core/pages/liverate/top-mover-section'
import { getLiverateHighlights, getLiverates } from '@/@core/services/api'
import { IHighlight, ILiverate } from '@/@core/@types/interfaces'
import LiverateListSection from '@/@core/pages/liverate/list-liverate-section'
import LiverateAskSection from '@/@core/pages/liverate/ask-section'
import LiverateInvestasiNowSection from '@/@core/pages/liverate/investasi-now-section'
import LiverateTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section'
import Footer from '@/@core/components/footer'
import '@/styles/liverate.css'

export default async function  Liverate({ params }: any) {
    const resp =  await getLiverateHighlights();
    const hightlight:IHighlight = resp.data.data

    const respLiverate =  await getLiverates();
    const liverates:ILiverate[] = respLiverate.data.data
    return (
    <>
        <MainHeader classText="header-white" lang={params.lang}/>
        <main className='liverate-page sm:mobile-responsive light-theme'>
          <LiverateHeaderSection />
          <LiverateTopMoverSection hightlight={hightlight}/>
          <LiverateListSection liverates={liverates}/>
          <LiverateAskSection />
          <LiverateInvestasiNowSection />
          <LiverateTestimonyCarouselSection />
        </main>
        <Footer />
    </>
  )
}
