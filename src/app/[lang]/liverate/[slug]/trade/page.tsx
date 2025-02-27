import React from 'react'

import { getAsset, getBlogs, getLiverateHighlights, getLiverateHighlightsBySlug, getLiverateMini, getLiverates } from '@/@core/services/api'
import { IBlog, ICoin, IHighlight, ILiverate, ILiverateMini } from '@/@core/@types/interfaces'
import '@/styles/liverate.css'
import { getDictionaryLierate } from '@/app/dictionaries';
import LiverateDetailTradePage from '@/@core/pages/liverate/detail-trade-page'

export default async function  LiverateCoinTrade({ params }: any) {
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
          {params.lang === 'id' && 
              <>
                  <meta name="csrf-token" content="YKZuVfpAJBUIOUF3y9UwEHrG3kjmXyR8XHgXYUtrF8roQKR8X022XPbDf7oZzwu6JBh4qJfCgQ7phUQ+mY+KKQ==" />
                  <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                  <meta content={`Grafik Harga ${asset.label} Terupdate Hari Ini (${asset.currency} to IDR) - TRIV`} name="title" />
                  <meta content={`Jual beli ${asset.label} 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin SHIB terpercaya sejak 2015, terdaftar di Bappebti`}   name="description" />
                  <meta content="origin-when-crossorigin" name="referrer" />
                  <meta content="index, follow, noodp" name="robots" />
                  <meta content="index, follow, noodp" name="googlebot" />
                  <meta content="index, follow, noodp" name="msnbot" />
                  <meta content="id_ID" property="og:locale" />
                  <meta content="Triv" property="og:site_name" />
                  <meta content="website" property="og:type" />
                  <meta content={`Grafik Harga ${asset.label} Terupdate Hari Ini (${asset.currency} to IDR) - TRIV`} property="og:title" />
                  <meta content={`Jual beli ${asset.label} 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin SHIB terpercaya sejak 2015, terdaftar di Bappebti`} property="og:description" />
                  <meta content={`https://triv.co.id/id/home/liverate/${asset.label.toLowerCase()}`} property="og:url" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                  <meta content="196" property="og:image:width" />
                  <meta content="82" property="og:image:height" />
                  <meta content="summary_large_image" name="twitter:card" />
                  <meta content={`Grafik Harga ${asset.label} Terupdate Hari Ini (${asset.currency} to IDR) - TRIV`} name="twitter:title" />
                  <meta content={`Jual beli ${asset.label} 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin SHIB terpercaya sejak 2015, terdaftar di Bappebti`} name="twitter:description" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                  <meta content="" name="author" />
                  <meta content="width=device-width, initial-scale=1" name="viewport" />
                  <meta name="csrf-param" content="authenticity_token" />
                  <meta name="csrf-token" content="B0noJUONUigLSq0ttEa/HROTPQxwsiypnfth66mII9GPryIM5oDAYfWwk+BmXIS3TU2b7AEvidsoBjK0e2y+Mg==" />
                  <link href={`https://triv.co.id/id/home/liverate/${asset.label.toLowerCase()}`} rel="canonical" />
                  <link href="https://triv.co.id/id" rel="home" />
                  <link href={`https://triv.co.id/id/home/liverate/${asset.label.toLowerCase()}`} hrefLang="id" rel="alternate" />
                  <link href={`https://triv.co.id/en/home/liverate/${asset.label.toLowerCase()}`} hrefLang="en" rel="alternate" />
                  <link href={`https://triv.co.id/id/home/liverate/${asset.label.toLowerCase()}`} hrefLang="x-default" rel="alternate" />
                  <title>{`Grafik Harga ${asset.label} Terupdate Hari Ini (${asset.currency} to IDR) - TRIV`}</title>
              </>
          }
          {params.lang === 'en' &&
              <>
                  <meta name="csrf-token" content="QBIH77Brr0k2Us8nKZ14DwpiD55+al/3R+2RA0i9G1rI9M3GFWY9AMio8er7h0OlVLypfg/3+oXyEMJcmlmGuQ==" />
                  <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                  <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                  <meta content={`Today's Updated ${asset.label} Price Chart (${asset.currency} to IDR) - TRIV`} name="title" />
                  <meta content={`${asset.label} price to rupiah today (${asset.currency} to IDR). Check the latest and updated (real time) Shib rate chart only on TRIV, the no.1 crypto marketplace" name="description`} name="description" />
                  <meta content="origin-when-crossorigin" name="referrer" />
                  <meta content="index, follow, noodp" name="robots" />
                  <meta content="index, follow, noodp" name="googlebot" />
                  <meta content="index, follow, noodp" name="msnbot" />
                  <meta content="en_US" property="og:locale" />
                  <meta content="Triv" property="og:site_name" />
                  <meta content="website" property="og:type" />
                  <meta content={`Today's Updated ${asset.label} Price Chart (${asset.currency} to IDR) - TRIV`} property="og:title" />
                  <meta content={`${asset.label} price to rupiah today (${asset.currency} to IDR). Check the latest and updated (real time) Shib rate chart only on TRIV, the no.1 crypto marketplace" name="description`} property="og:description" />
                  <meta content={`https://triv.co.id/en/home/liverate/${asset.label.toLowerCase()}`} property="og:url" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                  <meta content="196" property="og:image:width" />
                  <meta content="82" property="og:image:height" />
                  <meta content="summary_large_image" name="twitter:card" />
                  <meta content={`Today's Updated ${asset.label} Price Chart (${asset.currency} to IDR) - TRIV`} name="twitter:title" />
                  <meta content={`${asset.label} price to rupiah today (${asset.currency} to IDR). Check the latest and updated (real time) Shib rate chart only on TRIV, the no.1 crypto marketplace" name="description"`} name="twitter:description" />
                  <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                  <meta content="" name="author" />
                  <meta content="width=device-width, initial-scale=1" name="viewport" />
                  <meta name="csrf-param" content="authenticity_token" />
                  <meta name="csrf-token" content="B3gVOIGdKpWSEHzZ6tRPjb8W8WiE518XtFf9FJY1/tCPnt8RJJC43GzqQhQ4znQn4chXiPV6+mUBqq5LRNFjMw==" />
                  <link href={`https://triv.co.id/en/home/liverate/${asset.label.toLowerCase()}`} rel="canonical" />
                  <link href="https://triv.co.id/id" rel="home" />
                  <link href={`https://triv.co.id/id/home/liverate/${asset.label.toLowerCase()}`} hrefLang="id" rel="alternate" />
                  <link href={`https://triv.co.id/en/home/liverate/${asset.label.toLowerCase()}`} hrefLang="en" rel="alternate" />
                  <link href={`https://triv.co.id/en/home/liverate/${asset.label.toLowerCase()}`} hrefLang="x-default" rel="alternate" />
                  <title>{`Today's Updated ${asset.label} Price Chart (${asset.currency} to IDR) - TRIV`}</title>
              </>
          }
      </head>
      <body>
        <LiverateDetailTradePage 
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
