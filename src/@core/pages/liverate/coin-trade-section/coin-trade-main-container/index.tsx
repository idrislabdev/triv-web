import React, { useState } from 'react';
import LiverateCoinChartWrapper from '../../coin-chart-wrapper';
import CardNewsBlog from '@/@core/components/cards/card-news-blog';
import { IBlog, ICoin } from '@/@core/@types/interfaces';
import CoinTradeOverview from './overview';
import CoinTradeNews from './news';
import CoinTradeInsight from './insight';
import CoinTradeSocialMedia from './social-media';
import CoinAbout from './about';
import EtfOverview from './etf-overview';

const CoinTradeMainContainer = (props: {
  lang: string;
  objLang: any;
  blogs: IBlog[];
  asset: any;
  coin: ICoin;
}) => {
  const { lang, objLang, blogs, asset, coin } = props;

  const [tabActive, setTabActive] = useState(
    asset.code === 'PAYPAL' ? 'insight' : 'overview'
  );
  return (
    <div className="coin-main-container trade">
      <div className="header-subcontainer">
        <div
          className={`chart-area ${
            tabActive != 'overview' ? 'hidden-mobile' : ''
          }`}
        >
          <LiverateCoinChartWrapper
            symbol={coin.currency.toUpperCase() + 'IDR'}
          />
        </div>
        <ul className="tab-main">
          {asset.code !== 'PAYPAL' && (
            <li className={tabActive == 'overview' ? 'active' : ''}>
              <a onClick={() => setTabActive('overview')}>Overview</a>
            </li>
          )}

          <li className={tabActive == 'insight' ? 'active' : ''}>
            <a onClick={() => setTabActive('insight')}>Market Insight</a>
          </li>
          <li className={tabActive == 'social_media' ? 'active' : ''}>
            <a onClick={() => setTabActive('social_media')}>
              Social Media Data
            </a>
          </li>
          <li className={tabActive == 'news' ? 'active' : ''}>
            <a onClick={() => setTabActive('news')}>News</a>
          </li>
          {asset.code === 'BTC' && (
            <li className={tabActive == 'etf_overview' ? 'active' : ''}>
              <a onClick={() => setTabActive('etf_overview')}>Bitcoin ETF</a>
            </li>
          )}
          <li className={tabActive == 'about' ? 'active' : ''}>
            <a onClick={() => setTabActive('about')}>About</a>
          </li>
        </ul>
      </div>
      <div className="main-subcontainer">
        {tabActive == 'overview' && (
          <CoinTradeOverview lang={lang} objLang={objLang} asset={asset} />
        )}
        {tabActive == 'insight' && (
          <CoinTradeInsight lang={lang} asset={asset} />
        )}
        {tabActive == 'news' && (
          <CoinTradeNews lang={lang} blogs={blogs} asset={asset} />
        )}
        {tabActive == 'social_media' && (
          <CoinTradeSocialMedia asset={asset} lang={lang} objLang={objLang} />
        )}
        {tabActive == 'about' && <CoinAbout objLang={objLang} asset={asset} />}
        {tabActive == 'etf_overview' && <EtfOverview asset={asset} />}
      </div>
    </div>
  );
};

export default CoinTradeMainContainer;
