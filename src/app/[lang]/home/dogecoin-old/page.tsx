import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';
import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsServiceHeaderSection from '@/@core/pages/products/service-header-section';
import ProductsDeviceSection from '@/@core/pages/products/device-section';
import ProductsRegulasiSection from '@/@core/pages/products/regulasi-section';
import ProductsLayananSection from '@/@core/pages/products/layanan-section';
import ProductsAverageSection from '@/@core/pages/products/average-section';

import { getDictionariesDogeCoin } from '@/app/dictionaries';
import '@/styles/products.css';

export default async function ServiceDogeCoinPage({ params }: any) {
  const {
    header_section,
    regulasi_section,
    ewallet_section,
    start_now_section,
    layanan_section,
    average_section,
    triv_affliate,
  } = await getDictionariesDogeCoin(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="YKZuVfpAJBUIOUF3y9UwEHrG3kjmXyR8XHgXYUtrF8roQKR8X022XPbDf7oZzwu6JBh4qJfCgQ7phUQ+mY+KKQ=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Jual Beli Doge Coin Indonesia 24 Jam Mudah &amp; Cepat - TRIV"
              name="title"
            />
            <meta
              content="Jual beli Doge Coin 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin DOGE terpercaya sejak 2015, terdaftar di Bappebti"
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
              content="Jual Beli Doge Coin Indonesia 24 Jam Mudah &amp; Cepat - TRIV"
              property="og:title"
            />
            <meta
              content="Jual beli Doge Coin 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin DOGE terpercaya sejak 2015, terdaftar di Bappebti"
              property="og:description"
            />
            <meta
              content="https://triv.co.id/id/home/dogecoin"
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
              content="Jual Beli Doge Coin Indonesia 24 Jam Mudah &amp; Cepat - TRIV"
              name="twitter:title"
            />
            <meta
              content="Jual beli Doge Coin 24 jam, instant ke 61 bank di Indonesia &amp; spread terendah. Layanan jual beli coin DOGE terpercaya sejak 2015, terdaftar di Bappebti"
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
              content="B0noJUONUigLSq0ttEa/HROTPQxwsiypnfth66mII9GPryIM5oDAYfWwk+BmXIS3TU2b7AEvidsoBjK0e2y+Mg=="
            />
            <link href="https://triv.co.id/id/home/dogecoin" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/dogecoin"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/dogecoin"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/dogecoin"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Jual Beli Doge Coin Indonesia 24 Jam Mudah &amp; Cepat - TRIV
            </title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="QBIH77Brr0k2Us8nKZ14DwpiD55+al/3R+2RA0i9G1rI9M3GFWY9AMio8er7h0OlVLypfg/3+oXyEMJcmlmGuQ=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Buy and Sell Doge Coin Indonesia 24 Hours Easy &amp; Fast - TRIV"
              name="title"
            />
            <meta
              content="Buy and sell Doge Coin 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted DOGE coin trading service since 2015, registered with Bappebti"
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
              content="Buy and Sell Doge Coin Indonesia 24 Hours Easy &amp; Fast - TRIV"
              property="og:title"
            />
            <meta
              content="Buy and sell Doge Coin 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted DOGE coin trading service since 2015, registered with Bappebti"
              property="og:description"
            />
            <meta
              content="https://triv.co.id/en/home/dogecoin"
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
              content="Buy and Sell Doge Coin Indonesia 24 Hours Easy &amp; Fast - TRIV"
              name="twitter:title"
            />
            <meta
              content="Buy and sell Doge Coin 24 hours, instant to 61 banks in Indonesia &amp; lowest spreads. Trusted DOGE coin trading service since 2015, registered with Bappebti"
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
              content="B3gVOIGdKpWSEHzZ6tRPjb8W8WiE518XtFf9FJY1/tCPnt8RJJC43GzqQhQ4znQn4chXiPV6+mUBqq5LRNFjMw=="
            />
            <link href="https://triv.co.id/en/home/dogecoin" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/dogecoin"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/dogecoin"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/dogecoin"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Buy and Sell Doge Coin Indonesia 24 Hours Easy &amp; Fast - TRIV
            </title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="products-page sm:mobile-responsive md:mobile-responsive">
          <ProductsServiceHeaderSection objLang={header_section} />
          <ProductsDeviceSection />
          <ProductsRegulasiSection objLang={regulasi_section} />
          <ProductsLayananSection objLang={layanan_section} />
          <ProductsAverageSection objLang={average_section} />
          <ProductsAffliateSection objLang={triv_affliate} />
          <ProductsEwalletSection objLang={ewallet_section} />
          <ProductsInvestasiNowSection objLang={start_now_section} />
          <ProductsTestimonyCarouselSection />
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
