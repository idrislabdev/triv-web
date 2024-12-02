import React from 'react'

import { getAsset, getBlogs, getLiverateHighlights, getLiverateHighlightsBySlug, getLiverateMini, getLiverates } from '@/@core/services/api'
import { IBlog, ICoin, IHighlight, ILiverate, ILiverateMini } from '@/@core/@types/interfaces'
import { coins }from "../coins";
import '@/styles/liverate.css'
import LiverateDetailPage from '@/@core/pages/liverate/detail-page'
import { getDictionaryLierate } from '@/app/dictionaries';

export default async function  LiverateCoin({ params }: any) {
    const respCoin =  await getLiverateHighlightsBySlug(params.slug);
    const coins:ILiverate[] = respCoin.data.data
    const coin:ILiverate|any = coins[0]

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

    const {
      liverate_coin_section
    } = await getDictionaryLierate(params.lang);

    return (
    <html>
      <head>
        
      </head>
      <body>
        <LiverateDetailPage 
          lang={params.lang} 
          objLang={liverate_coin_section} 
          blogs={blogs} 
          liverateMinies={liverateMinies} 
          coin={coin} 
          asset={asset}
        />
      </body>
    </html>
  )
}
