import HomeBannerSection from "@/@core/pages/home/banner-section";
import HomeAssetCryptoSection from "@/@core/pages/home/assets-crypto-section";
import HomeRancangSection from "@/@core/pages/home/rancang-section";
import HomeInvestasiSection from "@/@core/pages/home/investasi-section";
import HomeDividenStakingSection from "@/@core/pages/home/dividen-staking-section";
import HomeEwalletSection from "@/@core/pages/home/ewallet-section";
import HomeMediaSection from "@/@core/pages/home/medias-section";
import BaruCryptoSection from "@/@core/pages/home/baru-crypto-section";
import HomeIndexCryptoSection from "@/@core/pages/home/index-crypto-section";
import HomeBuySellAssetsSection from "@/@core/pages/home/buy-sell-assets-section";
import MainHeader from "@/@core/components/main-header";
import { getDictionaryHome } from "./dictionaries";
import { getLiverateMini } from "@/@core/services/api";
import "@/styles/home.css"
import Footer from "@/@core/components/footer";

export default async function  Home() {
  const resp =  await getLiverateMini();
  const liverates = resp.data.data

  const {
    header_section, 
    special_section,
    easy_invest_section,
    dividen_section,
    ewallet_section,
    new_crypto_section,
    invest_section,
    media_section
  } = await getDictionaryHome('id');

  return (
    <>
      <MainHeader classText="" lang={'id'}/>
      <main className='home-page sm:mobile-responsive light-theme'>
        <HomeBannerSection lang='id' objLang={header_section}/>
        <HomeIndexCryptoSection liverates={liverates}/>
        <HomeAssetCryptoSection liverates={liverates}/>
        <HomeRancangSection objLang={special_section}/>
        <HomeInvestasiSection objLang={easy_invest_section} />
        <HomeDividenStakingSection lang={'id'} objLang={dividen_section} />
        <HomeEwalletSection objLang={ewallet_section} />
        <BaruCryptoSection objLang={new_crypto_section} />
        <HomeBuySellAssetsSection lang={'id'} objLang={invest_section}/>
        <HomeMediaSection objLang={media_section} />
      </main>
      <Footer />
    </>
    
  );
}
