'use client';

import MainHeader from '@/@core/components/main-header';
import React, { useCallback, useEffect } from 'react';
import HomeHeroSection from '../hero-section';
import HomeIndexCryptoSection from '../index-crypto-section';
import HomeRancangSection from '../rancang-section';
import HomeInvestasiSection from '../investasi-section';
import HomeTransaksiSection from '../transaksi-section';
import HomeDividenStakingSection from '../dividen-staking-section';
import HomeEwalletSection from '../ewallet-section';
import BaruCryptoSection from '../baru-crypto-section';
import HomeBuySellAssetsSection from '../buy-sell-assets-section';
import HomeMediaSection from '../medias-section';
import Footer from '@/@core/components/footer';
import '@/styles/home.css';
import '@/styles/animations/home.css';

const HomePage = (props: { lang: string; objLang: any; liverates: any }) => {
  const { lang, objLang, liverates } = props;
  const onScroll = useCallback(() => {
    const { scrollY } = window;
    if (scrollY >= 60) {
      console.log('scroll');
    } else {
    }
  }, []);

  useEffect(() => {
    // window.addEventListener("scroll", onScroll, { passive: true });
    // const { scrollY } = window;
  });
  return (
    <>
      <MainHeader classText="header-white" lang={lang} />
      <main className="home-page sm:mobile-responsive md:mobile-responsive">
        <HomeHeroSection lang={lang} objLang={objLang.header_section} />
        <HomeIndexCryptoSection liverates={liverates} />
        <HomeRancangSection objLang={objLang.special_section} />
        <HomeInvestasiSection
          lang={lang}
          objLang={objLang.easy_invest_section}
        />
        <HomeTransaksiSection lang={lang} objLang={objLang.transaksi_section} />
        <HomeDividenStakingSection
          lang={lang}
          objLang={objLang.dividen_section}
        />
        <HomeEwalletSection objLang={objLang.ewallet_section} />
        <BaruCryptoSection objLang={objLang.new_crypto_section} />
        <HomeBuySellAssetsSection
          lang={lang}
          objLang={objLang.invest_section}
        />
        <HomeMediaSection objLang={objLang.media_section} />
      </main>
      <Footer lang={lang} />
    </>
  );
};

export default HomePage;
