import HomeBannerSection from "@/@core/pages/home/banner-section";
import HomeAssetCryptoSection from "@/@core/pages/home/assets-crypto-section";
import HomeRancangSection from "@/@core/pages/home/rancang-section";
import HomeInvestasiSection from "@/@core/pages/home/investasi-section";
import HomeDividenStakingSection from "@/@core/pages/home/dividen-staking-section";
import HomeEwalletSection from "@/@core/pages/home/ewallet-section";
import HomeBuySellAssetsSection from "@/@core/pages/home/buy-sell-assets-section";
import HomeMediaSection from "@/@core/pages/home/medias-section";
import BaruCryptoSection from "@/@core/pages/home/baru-crypto-section";
import HomeIndexCryptoSection from "@/@core/pages/home/index-crypto-section";
import { getLiverateMini } from "@/@core/services/api";
import MainHeader from "@/@core/components/main-header";
import "@/styles/home.css"

export default async function  Home() {
  const resp =  await getLiverateMini();
  const liverates = resp.data.data

  return (
    <>
      <MainHeader classText="" lang={'id'}/>
      <HomeBannerSection />
      <HomeIndexCryptoSection liverates={liverates}/>
      <HomeAssetCryptoSection liverates={liverates}/>
      <HomeRancangSection />
      <HomeInvestasiSection />
      <HomeDividenStakingSection />
      <HomeEwalletSection />
      <BaruCryptoSection />
      <HomeBuySellAssetsSection />
      <HomeMediaSection />
    </>
    
  );
}
