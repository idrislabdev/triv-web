import MainHeader from '@/@core/components/main-header';
import React from 'react';
import LiverateHeaderSection from '@/@core/pages/liverate/header-section';
import LiverateTopMoverSection from '@/@core/pages/liverate/top-mover-section';
import LiverateListSection from '@/@core/pages/liverate/list-liverate-section';
import LiverateAskSection from '@/@core/pages/liverate/ask-section';
import LiverateInvestasiNowSection from '@/@core/pages/liverate/investasi-now-section';
import LiverateTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';
import Footer from '@/@core/components/footer';

import { getLiverateHighlights, getLiverates } from '@/@core/services/api';
import { IHighlight, ILiverate, IMetaTable } from '@/@core/@types/interfaces';
import { getDictionaryLierate } from '@/app/dictionaries';

import '@/styles/liverate.css';

export default async function Liverate({ params }: any) {
  const resp = await getLiverateHighlights();
  const hightlight: IHighlight = resp.data.data;

  const respLiverate = await getLiverates();
  const liverates: ILiverate[] = respLiverate.data.data;
  const metaLiverate: IMetaTable = respLiverate.data.statistic;

  const {
    header_section,
    liverate_coin_section,
    topmovers_section,
    invest_section,
    faq_section,
  } = await getDictionaryLierate(params.lang);

  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="QDMEk/Xx1ymIYBU/kyP+n3+MFWNcc+2o4HTgja9/SwXI1c66UPxFYHaaK/JBOcU1IVKzgy3uSNpVibPSfZvW5g=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Grafik Harga Crypto Hari Ini (Real Time) - TRIV"
              name="title"
            />
            <meta
              content="Cek seluruh Mata Uang Crypto. Nilai tukar, grafik, kapitalisasi pasar, volume, kurs terakhir &amp; persentase perubahan setiap Cryptocurrency"
              name="description"
            />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="#7952b3" name="theme-color" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta
              content="Grafik Harga Crypto Hari Ini (Real Time) - TRIV"
              property="og:title"
            />
            <meta
              content="Cek seluruh Mata Uang Crypto. Nilai tukar, grafik, kapitalisasi pasar, volume, kurs terakhir &amp; persentase perubahan setiap Cryptocurrency"
              property="og:description"
            />
            <meta
              content="https://triv.co.id/id/home/liverate"
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
            <meta
              content="Grafik Harga Crypto Hari Ini (Real Time) - TRIV"
              name="twitter:title"
            />
            <meta
              content="Cek seluruh Mata Uang Crypto. Nilai tukar, grafik, kapitalisasi pasar, volume, kurs terakhir &amp; persentase perubahan setiap Cryptocurrency"
              name="twitter:description"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="YWTvFVbAq8yIL1iawzFcPA0daCjFa0E5fZvthsPsxRTpgiU88805hXbVZlcRK2eWU8POyLT25EvIZr7ZEQhY9w=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link href="https://triv.co.id/id/home/liverate" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/liverate"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/liverate"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/liverate"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Grafik Harga Crypto Hari Ini (Real Time) - TRIV</title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="Ns5Xpb5FpiKhL3IjDFghws6ajKPPUa9c1gcyfyyDk8W+KJ2MG0g0a1/VTO7eQhpokEQqQ77MCi5j+mEg/mcOJg=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Crypto Price Chart Today (Real Time) - TRIV"
              name="title"
            />
            <meta
              content="Check all Crypto Currencies. Exchange rates, charts, market cap, volume, last rate &amp; percentage change of each Cryptocurrency"
              name="description"
            />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="#7952b3" name="theme-color" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta
              content="Crypto Price Chart Today (Real Time) - TRIV"
              property="og:title"
            />
            <meta
              content="Check all Crypto Currencies. Exchange rates, charts, market cap, volume, last rate &amp; percentage change of each Cryptocurrency"
              property="og:description"
            />
            <meta
              content="https://triv.co.id/en/home/liverate"
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
            <meta
              content="Crypto Price Chart Today (Real Time) - TRIV"
              name="twitter:title"
            />
            <meta
              content="Check all Crypto Currencies. Exchange rates, charts, market cap, volume, last rate &amp; percentage change of each Cryptocurrency"
              name="twitter:description"
            />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="n8lgAg+c118s2Hvw9RWoGk3i2vf1gcjmb8UqplVAgw0XL6orqpFFFtIiRT0nD5OwEzx8F4QcbZTaOHn5h6Qe7g=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link href="https://triv.co.id/en/home/liverate" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/liverate"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/liverate"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/liverate"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Crypto Price Chart Today (Real Time) - TRIV</title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="liverate-page sm:mobile-responsive md:mobile-responsive">
          <LiverateHeaderSection objLang={header_section} />
          <LiverateTopMoverSection
            lang={params.lang}
            objLang={topmovers_section}
            hightlight={hightlight}
          />
          <LiverateListSection
            objLang={liverate_coin_section}
            lang={params.lang}
            liverates={liverates}
            metaLiverate={metaLiverate}
          />
          <LiverateAskSection objLang={faq_section} />
          <LiverateInvestasiNowSection
            lang={params.lang}
            objLang={invest_section}
          />
          <LiverateTestimonyCarouselSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}
