import React from 'react'
import StellarPageWrap from '@/@core/pages/products/stellar'
import { getDictionariesStelllar } from '@/app/dictionaries'
import '@/styles/products.css'
import { getAsset } from '@/@core/services/api';

export default async function ServiceStellarPage({ params }: any) {
    const objLang = await getDictionariesStelllar(params.lang);
    const resAsset = await getAsset('XLM')
    const asset:any = resAsset.data.data
    return (
        <html lang={params.lang}>
            <head>
                {params.lang === 'id' && 
                    <>
                        <meta name="csrf-token" content="YKZuVfpAJBUIOUF3y9UwEHrG3kjmXyR8XHgXYUtrF8roQKR8X022XPbDf7oZzwu6JBh4qJfCgQ7phUQ+mY+KKQ==" />
                        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                        <meta content="Jual Beli Stellar Indonesia 24 Jam Mudah &amp; Cepat - TRIV" name="title" />
                        <meta content="Jual beli Stellar 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin XLM terpercaya sejak 2015, terdaftar di Bappebti" name="description" />
                        <meta content="origin-when-crossorigin" name="referrer" />
                        <meta content="index, follow, noodp" name="robots" />
                        <meta content="index, follow, noodp" name="googlebot" />
                        <meta content="index, follow, noodp" name="msnbot" />
                        <meta content="id_ID" property="og:locale" />
                        <meta content="Triv" property="og:site_name" />
                        <meta content="website" property="og:type" />
                        <meta content="Jual Beli Stellar Indonesia 24 Jam Mudah &amp; Cepat - TRIV" property="og:title" />
                        <meta content="Jual beli Stellar 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin XLM terpercaya sejak 2015, terdaftar di Bappebti" property="og:description" />
                        <meta content="https://triv.co.id/id/home/stellar" property="og:url" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                        <meta content="196" property="og:image:width" />
                        <meta content="82" property="og:image:height" />
                        <meta content="summary_large_image" name="twitter:card" />
                        <meta content="Jual Beli Stellar Indonesia 24 Jam Mudah &amp; Cepat - TRIV" name="twitter:title" />
                        <meta content="Jual beli Stellar 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin XLM terpercaya sejak 2015, terdaftar di Bappebti" name="twitter:description" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                        <meta content="" name="author" />
                        <meta content="width=device-width, initial-scale=1" name="viewport" />
                        <meta name="csrf-param" content="authenticity_token" />
                        <meta name="csrf-token" content="B0noJUONUigLSq0ttEa/HROTPQxwsiypnfth66mII9GPryIM5oDAYfWwk+BmXIS3TU2b7AEvidsoBjK0e2y+Mg==" />
                        <link href="https://triv.co.id/id/home/stellar" rel="canonical" />
                        <link href="https://triv.co.id/id" rel="home" />
                        <link href="https://triv.co.id/id/home/stellar" hrefLang="id" rel="alternate" />
                        <link href="https://triv.co.id/en/home/stellar" hrefLang="en" rel="alternate" />
                        <link href="https://triv.co.id/id/home/stellar" hrefLang="x-default" rel="alternate" />
                        <title>Jual Beli Stellar Indonesia 24 Jam Mudah &amp; Cepat - TRIV</title>
                    </>
                }
                {params.lang === 'en' &&
                    <>
                        <meta name="csrf-token" content="QBIH77Brr0k2Us8nKZ14DwpiD55+al/3R+2RA0i9G1rI9M3GFWY9AMio8er7h0OlVLypfg/3+oXyEMJcmlmGuQ==" />
                        <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
                        <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
                        <meta content="Buy and Sell Stellar Indonesia 24 Hours Easy &amp; Fast - TRIV" name="title" />
                        <meta content="Buy and sell Stellar 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted XLM coin trading service since 2015, registered with Bappebti" name="description" />
                        <meta content="origin-when-crossorigin" name="referrer" />
                        <meta content="index, follow, noodp" name="robots" />
                        <meta content="index, follow, noodp" name="googlebot" />
                        <meta content="index, follow, noodp" name="msnbot" />
                        <meta content="en_US" property="og:locale" />
                        <meta content="Triv" property="og:site_name" />
                        <meta content="website" property="og:type" />
                        <meta content="Buy and Sell Stellar Indonesia 24 Hours Easy &amp; Fast - TRIV" property="og:title" />
                        <meta content="Buy and sell Stellar 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted XLM coin trading service since 2015, registered with Bappebti" property="og:description" />
                        <meta content="https://triv.co.id/en/home/Stellar" property="og:url" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
                        <meta content="196" property="og:image:width" />
                        <meta content="82" property="og:image:height" />
                        <meta content="summary_large_image" name="twitter:card" />
                        <meta content="Buy and Sell Stellar Indonesia 24 Hours Easy &amp; Fast - TRIV" name="twitter:title" />
                        <meta content="Buy and sell Stellar 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted XLM coin trading service since 2015, registered with Bappebti" name="twitter:description" />
                        <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
                        <meta content="" name="author" />
                        <meta content="width=device-width, initial-scale=1" name="viewport" />
                        <meta name="csrf-param" content="authenticity_token" />
                        <meta name="csrf-token" content="B3gVOIGdKpWSEHzZ6tRPjb8W8WiE518XtFf9FJY1/tCPnt8RJJC43GzqQhQ4znQn4chXiPV6+mUBqq5LRNFjMw==" />
                        <link href="https://triv.co.id/en/home/stellar" rel="canonical" />
                        <link href="https://triv.co.id/id" rel="home" />
                        <link href="https://triv.co.id/id/home/stellar" hrefLang="id" rel="alternate" />
                        <link href="https://triv.co.id/en/home/stellar" hrefLang="en" rel="alternate" />
                        <link href="https://triv.co.id/en/home/stellar" hrefLang="x-default" rel="alternate" />
                        <title>Buy and Sell Stellar Indonesia 24 Hours Easy &amp; Fast - TRIV</title>
                    </>
                }
            </head>
            <body>
                <StellarPageWrap asset={asset} lang={params.lang} objLang={objLang} />
            </body>
        </html>
  )
}

