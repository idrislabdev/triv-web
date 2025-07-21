import React from 'react';
import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';

import '@/styles/products.css';
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section';
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section';
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section';

import ProductsAffliateSection from '@/@core/pages/products/affliate-section';
import ProductsServiceHeaderSection from '@/@core/pages/products/service-header-section';
import ProductsRegulasiDeviceSection from '@/@core/pages/products/regulasi-device-section';
import ProductsLayananSection from '@/@core/pages/products/layanan-section';
import ProductsAverageSection from '@/@core/pages/products/average-section';

import { getDictionariesPaypal } from '@/app/dictionaries';

export default async function ServicePaypal({ params }: any) {
  const {
    header_section,
    regulasi_section,
    ewallet_section,
    start_now_section,
    layanan_section,
    average_section,
    triv_affliate,
  } = await getDictionariesPaypal(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' && (
          <>
            <meta
              name="csrf-token"
              content="YNa8CRekjVNMyNZ5MTr+hu1a8yktjzNvVO/VhiY5vqjoMHYgsqkfGrIy6LTjIMUss4RVyVwSlh3hEobZ9N0jSw=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Jual Beli &amp; Isi Saldo Paypal Balance 24Jam Mudah - TRIV"
              name="title"
            />
            <meta
              content="Isi saldo Paypal 24jam instant ke 61 bank di Indonesia &amp; gratis fee Paypal. Triv jual beli paypal terpercaya sejak 2015, terdaftar &amp; diawasi Bappebti."
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
              content="Jual Beli &amp; Isi Saldo Paypal Balance 24Jam Mudah - TRIV"
              property="og:title"
            />
            <meta
              content="Isi saldo Paypal 24jam instant ke 61 bank di Indonesia &amp; gratis fee Paypal. Triv jual beli paypal terpercaya sejak 2015, terdaftar &amp; diawasi Bappebti."
              property="og:description"
            />
            <meta
              content="https://triv.co.id/id/home/paypal"
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
              content="Jual Beli &amp; Isi Saldo Paypal Balance 24Jam Mudah - TRIV"
              name="twitter:title"
            />
            <meta
              content="Isi saldo Paypal 24jam instant ke 61 bank di Indonesia &amp; gratis fee Paypal. Triv jual beli paypal terpercaya sejak 2015, terdaftar &amp; diawasi Bappebti."
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
              content="0hUmzfR7NdLxHBGHHlDCPkwGgvLhbMRg6+ylTBi1w6Ra8+zkUXanmw/mL0rMSvmUEtgkEpDxYRJeEfYTylFeRw=="
            />
            <link href="https://triv.co.id/id/home/paypal" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/paypal"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/paypal"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/id/home/paypal"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Jual Beli &amp; Isi Saldo Paypal Balance 24Jam Mudah - TRIV
            </title>
          </>
        )}
        {params.lang === 'en' && (
          <>
            <meta
              name="csrf-token"
              content="MphpsHsAs68pIAEXhWh7d72uR9GIOYRChss94myMlS+6fqOZ3g0h5tfaP9pXckDd43DhMfmkITAzNm69vmgIzA=="
            />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta
              content="width=device-width, initial-scale=1, shrink-to-fit=no"
              name="viewport"
            />
            <meta
              content="Buy and Sell &amp; Top Up Paypal Balance 24 Hours Easy - TRIV"
              name="title"
            />
            <meta
              content="Top up Paypal balance 24 hours instant to 61 banks in Indonesia &amp; free Paypal fee. Trusted paypal buying and selling triv since 2015, registered &amp; supervised by Bappebti."
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
              content="Buy and Sell &amp; Top Up Paypal Balance 24 Hours Easy - TRIV"
              property="og:title"
            />
            <meta
              content="Top up Paypal balance 24 hours instant to 61 banks in Indonesia &amp; free Paypal fee. Trusted paypal buying and selling triv since 2015, registered &amp; supervised by Bappebti."
              property="og:description"
            />
            <meta
              content="https://triv.co.id/en/home/paypal"
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
              content="Buy and Sell &amp; Top Up Paypal Balance 24 Hours Easy - TRIV"
              name="twitter:title"
            />
            <meta
              content="Top up Paypal balance 24 hours instant to 61 banks in Indonesia &amp; free Paypal fee. Trusted paypal buying and selling triv since 2015, registered &amp; supervised by Bappebti."
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
              content="VrsA9BL76J+AkCUTzLnHyjkxN4upqsMYOKfHq4pJ+Q/eXcrdt/Z61n5qG94eo/xgZ++Ra9g3ZmqNWpT0WK1k7A=="
            />
            <link href="https://triv.co.id/en/home/paypal" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link
              href="https://triv.co.id/id/home/paypal"
              hrefLang="id"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/paypal"
              hrefLang="en"
              rel="alternate"
            />
            <link
              href="https://triv.co.id/en/home/paypal"
              hrefLang="x-default"
              rel="alternate"
            />
            <title>
              Buy and Sell &amp; Top Up Paypal Balance 24 Hours Easy - TRIV
            </title>
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
        <Footer lang={params.lang} />
      </body>
    </html>
  );
}
