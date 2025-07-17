import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import '@/styles/products.css';
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsInvestasiNowSection2 from '@/@core/pages/products/investasi-now-section-2';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';
import ProductHeaderSection from '@/@core/pages/products/header-section';
import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsTokenListrikSection from '@/@core/pages/products/token-listrik-section';
import { getDictionariesProductsTokenListrik } from '@/app/dictionaries';

export default async function ProductsTokenListrik({ params }: any) {
  const {
    header_section,
    topup_section,
    ewallet_section,
    start_now_section,
    triv_affliate,
  } = await getDictionariesProductsTokenListrik(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="ZyuP3gA8SI0ljYMGyfbVvvKYLF+H+M9d7kxBO2R10j7vzUX3pTHaxNt3vcsb7O4UrEaKv/Zlai9bsRJktpFP3Q=="
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
              content="Beli dan Isi Ulang Token Listrik 3% OFF Tanpa Gangguan"
              property="og:title"
            />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/id/home/product-token-listrik"
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
              content="Beli dan Isi Ulang Token Listrik 3% OFF Tanpa Gangguan"
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
              content="lCN5L1J88yEi+3Q/Ful1IioW5xSluhckBUF6DBanFvocxbMG93FhaNwBSvLE806IdMhB9NQnslawvClTxEOLGQ=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/id/home/product-token-listrik"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-token-listrik"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-token-listrik"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/product-token-listrik"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Beli dan Isi Ulang Token Listrik 3% OFF Tanpa Gangguan
            </title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="GooUK0N9mJnujvVbNXjdJpz00+ohqw5o3udpq0340S2SbN4C5nAK0BB0y5bnYuaMwip1ClA2qxprGjr0nxxMzg=="
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
            <meta content="Token Listrik" property="og:title" />
            <meta content="" property="og:description" />
            <meta
              content="https://triv.co.id/en/home/product-token-listrik"
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
            <meta content="Token Listrik" name="twitter:title" />
            <meta content="" name="twitter:description" />
            <meta
              content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png"
              name="twitter:image"
            />
            <meta content="" name="author" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta
              name="csrf-token"
              content="Q03cfpTMXVP3/fnLzAD3VYPw+igzp9vI+OeyTONa/r/LqxZXMcHPGgkHxwYeGsz/3S5cyEI6frpNGuETMb5jXA=="
            />
            <link
              href="/assets/favicon-9de6a86b049b3b956dbc81cc43c816c4f656a017cb7978cb52485c17356448fa.ico"
              rel="icon"
            />
            <link
              href="https://triv.co.id/en/home/product-token-listrik"
              rel="canonical"
            />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/product-token-listrik"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-token-listrik"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/product-token-listrik"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>Token Listrik</title>
          </>
        )}
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="products-page sm:mobile-responsive md:mobile-responsive">
          <ProductHeaderSection objLang={header_section} />
          <ProductsTokenListrikSection objLang={topup_section} />
          <ProductsAffliateSection objLang={triv_affliate} />
          <ProductsEwalletSection objLang={ewallet_section} />
          <ProductsInvestasiNowSection2 objLang={start_now_section} />
          <ProductsTestimonyCarouselSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}
