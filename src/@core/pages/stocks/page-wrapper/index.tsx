'use client';

import MainHeader from '@/@core/components/main-header';
import React, { useCallback, useEffect } from 'react';
import StocksHeroSection from '../hero-section';
import StocksIndexCryptoSection from '../index-crypto-section';
import StocksEwalletSection from '../ewallet-section';
import StocksBannerSection from '../banner-section';
import StocksFaqSection from '../faq-section';
import StockRegulatedInsuredSection from '../regulated-insured-section';
import StocksBuySection from '../buy-section';
import StocksDividenSection from '../dividen-section';
import StocksWhySection from '../why-section';
import Footer from '@/@core/components/footer';
import '@/styles/stocks-new.css';
import '@/styles/animations/stocks.css';

const StocksPageWrapper = (props: {
  lang: string;
  objLang: any;
  liverates: any;
}) => {
  const { lang, objLang, liverates } = props;

  useEffect(() => {
    // window.addEventListener("scroll", onScroll, { passive: true });
    // const { scrollY } = window;
  });
  return (
    <>
      <MainHeader classText="header-white" lang={lang} />
      <main className="stocks-page sm:mobile-responsive md:mobile-responsive">
        <StocksHeroSection lang={lang} objLang={objLang.hero_section} />
        <StocksIndexCryptoSection liverates={liverates} />
        <StocksWhySection objLang={objLang.why_section} />
        <StocksDividenSection lang={lang} objLang={objLang.dividen_section} />
        <StocksBuySection lang={lang} objLang={objLang.buy_section} />
        <StockRegulatedInsuredSection
          objLang={objLang.regulated_insured_section}
        />
        <StocksEwalletSection objLang={objLang.ewallet_section} />
        <StocksFaqSection objLang={objLang.faq_section} />
        <StocksBannerSection objLang={objLang.banner_section} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default StocksPageWrapper;
