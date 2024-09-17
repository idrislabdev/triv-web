import React from 'react'

import { getAsset, getBlogs, getLiverateHighlights, getLiverateMini, getLiverates } from '@/@core/services/api'
import { IBlog, ICoin, IHighlight, ILiverate, ILiverateMini } from '@/@core/@types/interfaces'
import { coins }from "../coins";
import '@/styles/liverate.css'
import LiverateDetailPage from '@/@core/pages/liverate/detail-page'

export default async function  LiverateCoin({ params }: any) {
    const coin:ICoin|any = coins.find((x) => x.slug == params.slug)

    const resp =  await getLiverateHighlights();
    const hightlight:IHighlight = resp.data.data

    const respLiverate =  await getLiverates();
    const liverates:ILiverate[] = respLiverate.data.data

    const respLiverateMini =  await getLiverateMini();
    const liverateMinies:ILiverateMini[] = respLiverateMini.data.data

    const resBlogs =  await getBlogs();
    const blogs:IBlog[] = resBlogs.data.data.contents

    const resAsset = await getAsset(coin.currency)
    const asset:any = resAsset.data.data


    return (
    <>
      <LiverateDetailPage 
        lang={params.lang} 
        objLang={null} 
        blogs={blogs} 
        liverateMinies={liverateMinies} 
        coin={coin} 
        asset={asset}
      />
    </>
  )
}
