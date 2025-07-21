import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';

import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsServiceHeaderSection from '@/@core/pages/products/service-header-section';
import ProductsRegulasiDeviceSection from '@/@core/pages/products/regulasi-device-section';
import ProductsLayananSection from '@/@core/pages/products/layanan-section';
import ProductsAverageSection from '@/@core/pages/products/average-section';

import { getDictionariesPerfectMoney } from '@/app/dictionaries';
import '@/styles/products.css';

export default async function ServicePerfectMoney({ params }: any) {
  const {
    header_section,
    regulasi_section,
    ewallet_section,
    start_now_section,
    layanan_section,
    average_section,
    triv_affliate,
  } = await getDictionariesPerfectMoney(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="+weP7pY3ybhxk8tLlddZYjmM0Xtn7fzz0MM6o3X5RAFz4UXHMzpb8Y9p9YZHzWLIZ1J3mxZwWYFlPmn8px3Z4g=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="TRIV - Jual Beli &amp; Exchange Perfect Money 24 Jam"
              name="title"
            />
            <meta
              content="Jual Beli &amp; Exchange Perfect money 24jam instant ke 61 bank di Indonesia. Triv terpercaya sejak 2015, terdaftar dan diawasi oleh Bappebti."
              name="description"
            />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta
              content="TRIV - Jual Beli &amp; Exchange Perfect Money 24 Jam"
              property="og:title"
            />
            <meta
              content="Jual Beli &amp; Exchange Perfect money 24jam instant ke 61 bank di Indonesia. Triv terpercaya sejak 2015, terdaftar dan diawasi oleh Bappebti."
              property="og:description"
            />
            <meta
              content="https://triv.co.id/id/home/perfect-money"
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
              content="TRIV - Jual Beli &amp; Exchange Perfect Money 24 Jam"
              name="twitter:title"
            />
            <meta
              content="Jual Beli &amp; Exchange Perfect money 24jam instant ke 61 bank di Indonesia. Triv terpercaya sejak 2015, terdaftar dan diawasi oleh Bappebti."
              name="twitter:description"
            />
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
              content="sfG/jlMCDbzywoP8R9sOlgK75alTJpHuXWqZde2px6A5F3Wn9g+f9Qw4vTGVwTU8XGVDSSK7NJzol8oqP01aQw=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/id/home/perfect-money"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/perfect-money"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/perfect-money"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/perfect-money"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>TRIV - Jual Beli &amp; Exchange Perfect Money 24 Jam</title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="y+m5ga+Rewl5a8meiXUuJYmRQ5rkvb8ynLWvMTmUCitDD3OoCpzpQIeR91NbbxWP10/lepUgGkApSPxu63CXyA=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="TRIV - Buy Sell &amp; Exchange Perfect Money 24 Hours"
              name="title"
            />
            <meta
              content="Buy and Sell &amp; Exchange Perfect money 24 hours instant to 61 banks in Indonesia. Trusted triv since 2015, registered and supervised by Bappebti."
              name="description"
            />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta
              content="TRIV - Buy Sell &amp; Exchange Perfect Money 24 Hours"
              property="og:title"
            />
            <meta
              content="Buy and Sell &amp; Exchange Perfect money 24 hours instant to 61 banks in Indonesia. Trusted triv since 2015, registered and supervised by Bappebti."
              property="og:description"
            />
            <meta
              content="https://triv.co.id/en/home/perfect-money"
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
              content="TRIV - Buy Sell &amp; Exchange Perfect Money 24 Hours"
              name="twitter:title"
            />
            <meta
              content="Buy and Sell &amp; Exchange Perfect money 24 hours instant to 61 banks in Indonesia. Trusted triv since 2015, registered and supervised by Bappebti."
              name="twitter:description"
            />
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
              content="VTRDk35x0PNgE2jHk3QqVjT4yRHtrn1XjRAQhj5TTNjd0om623xCup7pVgpBbhH8aiZv8Zwz2CU47UPZ7LfROw=="
            />
            <link
              href="https://triv.co.id/en/home/perfect-money"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/perfect-money"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/perfect-money"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/perfect-money"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>TRIV - Buy Sell &amp; Exchange Perfect Money 24 Hours</title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="products-page sm:mobile-responsive md:mobile-responsive">
          <ProductsServiceHeaderSection objLang={header_section} />
          <ProductsRegulasiDeviceSection objLang={regulasi_section} />
          <ProductsLayananSection objLang={layanan_section} />
          <ProductsAverageSection objLang={average_section} />
          <ProductsAffliateSection objLang={triv_affliate} />
          <ProductsEwalletSection objLang={ewallet_section} />
          <ProductsInvestasiNowSection objLang={start_now_section} />
          <ProductsTestimonyCarouselSection />
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
