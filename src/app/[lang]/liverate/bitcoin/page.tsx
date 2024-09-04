import MainHeader from '@/@core/components/main-header'
import React from 'react'

import Footer from '@/@core/components/footer'

import { getLiverateHighlights, getLiverates } from '@/@core/services/api'
import { IHighlight, ILiverate } from '@/@core/@types/interfaces'
import { getDictionaryLierate } from '@/app/dictionaries'

import '@/styles/liverate.css'
import LiverateBietcoinChartSection from '@/@core/pages/liverate/coin-chart-container/page'
import LiverateCoinSection from '@/@core/pages/liverate/coin-section'

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
            <LiverateCoinSection objLang={null} />
          </main>
        <Footer />
    </>
  )
}
