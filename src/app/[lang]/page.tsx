import HomeHeroSection from "@/@core/pages/home/hero-section";
import HomeAssetCryptoSection from "@/@core/pages/home/assets-crypto-section";
import HomeRancangSection from "@/@core/pages/home/rancang-section";
import HomeInvestasiSection from "@/@core/pages/home/investasi-section";
import HomeTransaksiSection from "@/@core/pages/home/transaksi-section";
import HomeDividenStakingSection from "@/@core/pages/home/dividen-staking-section";
import HomeEwalletSection from "@/@core/pages/home/ewallet-section";
import HomeMediaSection from "@/@core/pages/home/medias-section";
import BaruCryptoSection from "@/@core/pages/home/baru-crypto-section";
import HomeIndexCryptoSection from "@/@core/pages/home/index-crypto-section";
import HomeBuySellAssetsSection from "@/@core/pages/home/buy-sell-assets-section";
import MainHeader from "@/@core/components/main-header";
import { getLiverateMini } from "@/@core/services/api";
import { getDictionaryHome } from "../dictionaries";
import "@/styles/home.css"
import Footer from "@/@core/components/footer";

export default async function  HomeLang({ params }: any) {
  const resp =  await getLiverateMini();
  const liverates = resp.data.data

  const {
    header_section, 
    special_section,
    easy_invest_section,
    transaksi_section,
    dividen_section,
    ewallet_section,
    new_crypto_section,
    invest_section,
    media_section
  } = await getDictionaryHome(params.lang);
  

  return (
    <html lang={params.lang}>
      <head>
        {params.lang === 'id' &&
          <>
            <meta name="csrf-token" content="P8HwucyJ95JivrlxxDEaq0xXKBP5vinnl5mALbQDFs63JzqQaYRl25xEh7wWKyEBEomO84gjjJUiZNNyZueLLQ==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" name="title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="id_ID" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" property="og:title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" property="og:description" />
            <meta content="https://triv.co.id/id" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia" name="twitter:title" />
            <meta content="Marketplace Cryptocurrency Indonesia (Bitcoin, Ethereum &amp; kripto lainnya). Jual beli aset digital, paypal &amp; e-Money terpercaya sejak 2015 &amp; terdaftar Bappebti" name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="74JyFuzqt7Nrp42PJTezGIZWuDC6Xe/Vc71MiZZhpKRnZLg/Secl+pVds0L3LYiy2Ige0MvASqfGQB/WRIU5Rw==" />
            <link href="https://triv.co.id/id" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/id" hrefLang="x-default" rel="alternate" />
            <title>TRIV: Marketplace Cryptocurrency &amp; Digital Asset Indonesia</title>
          </>
        }
        {params.lang === 'en' &&
          <>
            <meta name="csrf-token" content="MN3/USCNOK6jJw4/eud0+027quZoi2Aoe9/H+zGP1r64OzV4hYCq513dMPKo/U9RE2UMBhkWxVrOIpSk42tLXQ==" />
            <meta content="text/html; charset=UTF-8" httpEquiv="Content-Type" />
            <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" name="title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti" name="description" />
            <meta content="origin-when-crossorigin" name="referrer" />
            <meta content="index, follow, noodp" name="robots" />
            <meta content="index, follow, noodp" name="googlebot" />
            <meta content="index, follow, noodp" name="msnbot" />
            <meta content="en_US" property="og:locale" />
            <meta content="Triv" property="og:site_name" />
            <meta content="website" property="og:type" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" property="og:title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti"  property="og:description" />
            <meta content="https://triv.co.id/en" property="og:url" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" property="og:image:secure_url" />
            <meta content="196" property="og:image:width" />
            <meta content="82" property="og:image:height" />
            <meta content="summary_large_image" name="twitter:card" />
            <meta content="TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace" name="twitter:title" />
            <meta content="Indonesian Cryptocurrency Marketplace (Bitcoin, Ethereum &amp; other crypto). Reliable trading of digital assets, paypal &amp; e-Money since 2015 &amp; registered with Bappebti" name="twitter:description" />
            <meta content="https://triv.co.id/assets/logo_triv-6bfd8b14aab606f32abb737168e7d6ce14c567877614d274e9675d768da1a505.png" name="twitter:image" />
            <meta content="" name="author" />
            <meta content="width=device-width, initial-scale=1" name="viewport" />
            <meta name="csrf-param" content="authenticity_token" />
            <meta name="csrf-token" content="5qJra2aeoNRgzLic23Mrmxs2KIhCFEjGF8vCPh2woxduRKFCw5MynZ42hlEJaRAxReiOaDOJ7bSiNpFhz1Q+9A==" />
            <link href="https://triv.co.id/en" rel="canonical" />
            <link href="https://triv.co.id/id" rel="home" />
            <link href="https://triv.co.id/id" hrefLang="id" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="en" rel="alternate" />
            <link href="https://triv.co.id/en" hrefLang="x-default" rel="alternate" />
            <title>TRIV: Indonesian Cryptocurrency &amp; Digital Asset Marketplace</title>
          </>
        }
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang}/>
        <main className='home-page sm:mobile-responsive md:mobile-responsive light-theme'>
          <HomeHeroSection lang={params.lang} objLang={header_section}/>
          <HomeIndexCryptoSection liverates={liverates}/>
          {/* <HomeAssetCryptoSection liverates={liverates}/> */}
          <HomeRancangSection objLang={special_section}/>
          <HomeInvestasiSection lang={params.lang} objLang={easy_invest_section}/>
          <HomeTransaksiSection lang={params.lang} objLang={transaksi_section}/>
          <HomeDividenStakingSection lang={params.lang} objLang={dividen_section} />
          <HomeEwalletSection objLang={ewallet_section} />
          <BaruCryptoSection objLang={new_crypto_section} />
          <HomeBuySellAssetsSection lang={params.lang} objLang={invest_section}/>
          <HomeMediaSection objLang={media_section} />
        </main>
        <Footer />
      </body>
    </html>
  );
}
