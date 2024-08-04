import MainHeader from '@/@core/components/main-header'
import React from 'react'

import '@/styles/liverate.css'
import LiverateHeaderSection from '@/@core/pages/liverate/header-section'
import LiverateTopMoverSection from '@/@core/pages/liverate/top-mover-section'
import { getLiverateHighlights, getLiverates } from '@/@core/services/api'
import { IHighlight, ILiverate } from '@/@core/@types/interfaces'
import LiverateListSection from '@/@core/pages/liverate/list-liverate-section'

export default async function  Liverate() {
    const resp =  await getLiverateHighlights();
    const hightlight:IHighlight = resp.data.data

    const respLiverate =  await getLiverates();
    const liverates:ILiverate[] = respLiverate.data.data
    return (
    <>
        <MainHeader classText="header-white"/>
        <LiverateHeaderSection />
        <LiverateTopMoverSection hightlight={hightlight}/>
        <LiverateListSection liverates={liverates}/>
    </>
  )
}
