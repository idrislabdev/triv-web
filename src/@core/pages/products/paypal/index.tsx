'use client';

import MainHeader from '@/@core/components/main-header';
import React from 'react';
import ProductsRegulasiNewSection from '../sections/regulasi-new-section';
import ProductsLayananPaypalNewSection from '../sections/layanan-paypal-new-section';
import ProductsAffliateNewSection from '../sections/affliate-new-section';
import ProductsAverageNewSection from '../sections/average-new-section';
import ProductsEwalletNewSection from '../sections/ewallet-new-section';
import ProductsBannerSection from '../sections/banner-section';
import Footer from '@/@core/components/footer';

import '@/styles/products-new.css';
import '@/styles/components/form-service.css';
import ProductsServiceHeaderPaypalNewSection from '../sections/service-header-paypal-new-section';

const PaypalPageWrap = (props: { asset: any; lang: string; objLang: any }) => {
  const { asset, lang, objLang } = props;
  const objProduct = { code: 'USD', name: 'Paypal' };
  return (
    <>
      <MainHeader classText="header-white" lang={lang} />
      <main className="products-page sm:mobile-responsive md:mobile-responsive light-theme">
        <ProductsServiceHeaderPaypalNewSection
          asset={asset}
          lang={lang}
          objLang={objLang.header_section}
          objProduct={objProduct}
        />
        <ProductsRegulasiNewSection objLang={objLang.regulasi_section} />
        <ProductsLayananPaypalNewSection objLang={objLang.layanan_section} />
        <ProductsAffliateNewSection objLang={objLang.triv_affliate} />
        <ProductsAverageNewSection objLang={objLang.average_section} />
        <ProductsEwalletNewSection objLang={objLang.ewallet_section} />
        <ProductsBannerSection
          lang={lang}
          objLang={objLang.start_now_section}
        />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default PaypalPageWrap;
