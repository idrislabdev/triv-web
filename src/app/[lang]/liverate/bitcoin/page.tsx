import MainHeader from '@/@core/components/main-header'
import React from 'react'

import Footer from '@/@core/components/footer'
import LiverateCoinSection from '@/@core/pages/liverate/coin-section'
import { getBlogs, getLiverateHighlights, getLiverateMini, getLiverates } from '@/@core/services/api'
import { IBlog, IHighlight, ILiverate, ILiverateMini } from '@/@core/@types/interfaces'
import { getDictionaryLierate } from '@/app/dictionaries'
import '@/styles/liverate.css'

export default async function  LiverateCoin({ params }: any) {
    const resp =  await getLiverateHighlights();
    const hightlight:IHighlight = resp.data.data

    const respLiverate =  await getLiverates();
    const liverates:ILiverate[] = respLiverate.data.data

    const respLiverateMini =  await getLiverateMini();
    const liverateMinies:ILiverateMini[] = respLiverateMini.data.data

    const resBlogs =  await getBlogs();
    const blogs:IBlog[] = resBlogs.data.data.contents

    const {
      header_section,
      topmovers_section,
      invest_section,
    } = await getDictionaryLierate(params.lang);

    return (
    <>
        <MainHeader classText="header-white" lang={params.lang}/>
          <main className='liverate-page sm:mobile-responsive light-theme'>
            <LiverateCoinSection lang={params.lang} objLang={null} blogs={blogs} liverateMinies={liverateMinies} />
          </main>
        <Footer />
    </>
  )
}
