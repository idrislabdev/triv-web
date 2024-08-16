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
import { getLiverateMini } from "@/@core/services/api";
import { getDictionaryHome } from "../dictionaries";
import "@/styles/home.css"

export default async function  HomeLang({ params }: any) {
  const resp =  await getLiverateMini();
  const liverates = resp.data.data

  const {
    header_section, 
  } = await getDictionaryHome(params.lang);

  return (
    <>
      <MainHeader classText="" lang={params.lang}/>
      <main className='home-page sm:mobile-responsive light-theme'>
        <HomeBannerSection lang={header_section}/>
        <HomeIndexCryptoSection liverates={liverates}/>
        <HomeAssetCryptoSection liverates={liverates}/>
        <HomeRancangSection />
        <HomeInvestasiSection />
        <HomeDividenStakingSection />
        <HomeEwalletSection />
        <BaruCryptoSection />
        <HomeBuySellAssetsSection />
        <HomeMediaSection />
      </main>
    </>
    
  );
}
