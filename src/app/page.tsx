import Image from "next/image";
import HomeBannerSection from "./@core/pages/home/banner-section";
import HomeAssetCryptoSection from "./@core/pages/home/assets-crypto-section";
import HomeRancangSection from "./@core/pages/home/rancang-section";
import HomeInvestasiSection from "./@core/pages/home/investasi-section";
import HomeDividenStakingSection from "./@core/pages/home/dividen-staking-section";
import HomeEwalletSection from "./@core/pages/home/ewallet-section";
import HomeBuySellAssetsSection from "./@core/pages/home/buy-sell-assets-section";
import HomeMediaSection from "./@core/pages/home/medias-section";

export default function Home() {
  
  return (
    <>
      <HomeBannerSection />
      <HomeAssetCryptoSection />
      <HomeRancangSection />
      <HomeInvestasiSection />
      <HomeDividenStakingSection />
      <HomeEwalletSection />
      <HomeBuySellAssetsSection />
      <HomeMediaSection />
    </>
    
  );
}
