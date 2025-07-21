import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import '@/styles/products.css';
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';
import { getDictionariesProductsPulsa } from '@/app/dictionaries';
import ProductHeaderSection from '@/@core/pages/products/header-section';
import ProductsTopupPulsaSection from '@/@core/pages/products/topup-pulsa-section';
import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsInvestasiNowSection2 from '@/@core/pages/products/investasi-now-section-2';

export default async function ProductsPulsa({ params }: any) {
  const {
    header_section,
    topup_section,
    ewallet_section,
    start_now_section,
    triv_affliate,
  } = await getDictionariesProductsPulsa(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="RaV9fNtdJOQByybvlONHB2HckTxgMS++KVbDAU1qqQzNQ7dVflC2rf8xGCJG+XytPwI33BGsisycq5Ben4407w=="
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
              content="Beli Pulsa &amp; Isi Ulang Online, Hemat, 24 Jam - TRIV"
              property="og:title"
            />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/id/home/product-pulsa"
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
              content="Beli Pulsa &amp; Isi Ulang Online, Hemat, 24 Jam - TRIV"
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
              content="nD/yglbn7sh6iZZjVreYatFVqPeVhzDJDt4Eaz3qC/YU2Tir8+p8gYRzqK6EraPAj4sOF+Qalbu7I1c07w6WFQ=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/id/home/product-pulsa"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-pulsa"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-pulsa"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/product-pulsa"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Beli Pulsa &amp; Isi Ulang Online, Hemat, 24 Jam - TRIV
            </title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="eRq0zpi6DzYfuSsdpyWfbEFZuULZ1uCbmofvyhvMo3/x/H7nPbedf+FDFdB1P6TGH4cfoqhLRekveryVySg+nA=="
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
            <meta content="Pulsa" property="og:title" />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/en/home/product-pulsa"
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
            <meta content="Pulsa" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="2NqW+1dRjBz+S8YfKGtjW6wIHS91HQAbKwlISG5VQutQPFzS8lweVQCx+NL6cVjx8ta7zwSApWme9BsXvLHfCA=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/en/home/product-pulsa"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-pulsa"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-pulsa"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-pulsa"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Pulsa</title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="products-page sm:mobile-responsive md:mobile-responsive">
          <ProductHeaderSection objLang={header_section} />
          <ProductsTopupPulsaSection objLang={topup_section} />
          <ProductsAffliateSection objLang={triv_affliate} />
          <ProductsEwalletSection objLang={ewallet_section} />
          <ProductsInvestasiNowSection2 objLang={start_now_section} />
          <ProductsTestimonyCarouselSection />
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
