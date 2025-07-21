import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import '@/styles/products.css';
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsInvestasiNowSection2 from '@/@core/pages/products/investasi-now-section-2';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';
import ProductHeaderSection from '@/@core/pages/products/header-section';
import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsTagihanSection from '@/@core/pages/products/tagihan-section';
import { getDictionariesProductsTagihan } from '@/app/dictionaries';

export default async function ProductsPulsa({ params }: any) {
  const {
    header_section,
    topup_section,
    ewallet_section,
    start_now_section,
    triv_affliate,
  } = await getDictionariesProductsTagihan(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="ahcqs5xngQl5up1L1OIb/C7Go9GQOUEFdRxo8B/lXwfi8eCaOWoTQIdAo4YG+CBWcBgFMeGk5HfA4TuvzQHC5A=="
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
            <meta
              content="Bayar Tagihan Apapun Cepat, Hemat &amp; Aman - TRIV"
              property="og:title"
            />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/id/home/product-tagihan"
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
              content="Bayar Tagihan Apapun Cepat, Hemat &amp; Aman - TRIV"
              name="twitter:title"
            />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="ceNnqD39jD8HBc8I7aBdZbTocEUPrmITRAGz1VfR3FP5Ba2BmPAedvn/8cU/umbP6jbWpX4zx2Hx/OCKhTVBsA=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/id/home/product-tagihan"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-tagihan"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-tagihan"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/product-tagihan"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Bayar Tagihan Apapun Cepat, Hemat &amp; Aman - TRIV</title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="0rpJndrahvyYbIT7iLLmkEArrOYtL+L/MUODU0zQ4DlaXIO0f9cUtWaWujZaqN06HvUKBlyyR42EvtAMnjR92g=="
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
            <meta content="Tagihan" property="og:title" />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/en/home/product-tagihan"
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
            <meta content="Tagihan" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="qcpgLK+GdxKd+S11EefNbNLEkouRin06SiHDqGFl9k8hLKoFCovlW2MDE7jD/fbGjBo0a+AX2Ej/3JD3s4FrrA=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/en/home/product-tagihan"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-tagihan"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-tagihan"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-tagihan"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Tagihan</title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="products-page sm:mobile-responsive md:mobile-responsive">
          <ProductHeaderSection objLang={header_section} />
          <ProductsTagihanSection objLang={topup_section} />
          <ProductsAffliateSection objLang={triv_affliate} />
          <ProductsEwalletSection objLang={ewallet_section} />
          <ProductsInvestasiNowSection2 objLang={start_now_section} />
          <ProductsTestimonyCarouselSection />
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
