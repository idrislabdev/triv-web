import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';
import AffliateHeroSection from '@/@core/pages/affliate/hero-section';
import React from 'react';

import '@/styles/affliate.css';
import { getDictionariesAffliate } from '@/app/dictionaries';
import AffliateComissionsection from '@/@core/pages/affliate/comission-section';
import AffliateDownlineSection from '@/@core/pages/affliate/downline-section';
import AffliateWithdrawSection from '@/@core/pages/affliate/withdraw-section';
import AffliateHolidaySection from '@/@core/pages/affliate/holiday-section';
import AffliateExtraSection from '@/@core/pages/affliate/extra-section';
export default async function Affliate({ params }: any) {
  const {
    hero_section,
    comission_section,
    downline_section,
    withdraw_section,
    holiday_section,
    extra_section,
  } = await getDictionariesAffliate(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="zQy0vtyXJP/aRnzHz2ivswdQpY8n2wXvfo9DPFq9E5xF6n6XeZq2tiS8QgodcpQZWY4Db1ZGoJ3LchBjiFmOfw=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia"
              name="title"
            />
            <meta content="" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Affiliate" property="og:title" />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/id/home/affiliate"
              property="og:url"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              property="og:image"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              property="og:image:secure_url"
            />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Affiliate" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="tG6lY8zg85GBGDJbjopNjO0+wqdg53bLGBKdZo7WGfs8iG9Kae1h2H/iDJZckHYms+BkRxF607mt7845XDKEGA=="
            />
            <link href="https://triv.co.id/id/home/affiliate" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/affiliate"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/affiliate"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/affiliate"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>TRIV - Affiliate</title>
            <meta
              name="action-cable-url"
              content="wss://ws.triv.co.id/cable?key=a830d1f85d8c47dfbd21b3935fd10e16"
            />
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="NRYYhn5rqer2+i2UJYyCsczwB3iRZs2FKrXbvkiAvCa98NKv22Y7owgAE1n3lrkbki6hmOD7aPefSIjhmmQhxQ=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Triv - Jual Beli eMoney dan Aset Digital Terbesar di Indonesia"
              name="title"
            />
            <meta content="" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="Affiliate" property="og:title" />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/en/home/affiliate"
              property="og:url"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              property="og:image"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              property="og:image:secure_url"
            />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="Affiliate" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="u8ESnHvtskUw+nkblq2xNVY4qOlRD2klN8nqQX7ya+szJ9i13uAgDM4AR9ZEt4qfCOYOCSCSzFeCNLkerBb2CA=="
            />
            <link href="https://triv.co.id/en/home/affiliate" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/affiliate"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/affiliate"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/affiliate"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>TRIV - Affiliate</title>
            <meta
              name="action-cable-url"
              content="wss://ws.triv.co.id/cable?key=a830d1f85d8c47dfbd21b3935fd10e16"
            />
          </>
        )}
      </head>
      <body>
        <MainHeader classText={'header-affliate'} lang={params.lang} />
        <main className="affliate-page sm:mobile-responsive md:mobile-responsive">
          <AffliateHeroSection objLang={hero_section} />
          <AffliateComissionsection objLang={comission_section} />
          <AffliateDownlineSection objLang={downline_section} />
          <AffliateWithdrawSection objLang={withdraw_section} />
          <AffliateHolidaySection objLang={holiday_section} />
          <AffliateExtraSection objLang={extra_section} />
        </main>
        <Footer />
      </body>
    </html>
  );
}
