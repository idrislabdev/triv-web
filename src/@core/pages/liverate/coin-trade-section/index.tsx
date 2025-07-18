import React from 'react';
import Image from 'next/image';
import { IBlog, ICoin, ILiverateMini } from '@/@core/@types/interfaces';
import CoinTradeSideContainer from './coin-trade-side-container';
import CoinTradeMainContainer from './coin-trade-main-container';

const LiverateCoinTradeSection = (props: {
  lang: string;
  objLang: any;
  blogs: IBlog[];
  liverateMinies: ILiverateMini[];
  coin: ICoin;
  asset: any;
}) => {
  const { lang, objLang, blogs, liverateMinies, coin, asset } = props;
  return (
    <section className="liverate-coin-section">
      <h2>
        <span>
          <Image
            src={asset.icon_url}
            alt="bitcoin"
            width={0}
            height={0}
            sizes="100%"
          />
        </span>
        {/* Harga {asset.label} ({asset.currency}) Hari Ini */}
        {objLang.trade_section.title
          .replaceAll('__label__', asset.label)
          .replaceAll('__currency__', asset.currency)}
      </h2>
      <div className="coin-container">
        <CoinTradeMainContainer
          lang={lang}
          objLang={objLang}
          blogs={blogs}
          coin={coin}
          asset={asset}
        />
        <CoinTradeSideContainer
          asset={asset}
          liverateMinies={liverateMinies}
          blogs={blogs}
          objLang={objLang}
          lang={lang}
        />
      </div>
    </section>
  );
};

export default LiverateCoinTradeSection;
