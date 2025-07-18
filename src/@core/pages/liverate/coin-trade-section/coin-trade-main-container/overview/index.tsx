import {
  ChartPie,
  ChartPie2,
  ChartPPT,
  TrendChartIcon,
  TrendChartIcon2,
} from '@/@core/components/custom-icons';
import { nFormatter2 } from '@/@core/utils/general';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CoinTradeOverview = (props: {
  lang: string;
  objLang: any;
  asset: any;
}) => {
  const { lang, objLang, asset } = props;
  const nFormatter = (num: number, digits: number) => {
    const lookup = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'Rb' },
      { value: 1e6, symbol: 'Jt' },
      { value: 1e9, symbol: 'M' },
      { value: 1e12, symbol: 'T' },
      { value: 1e15, symbol: 'Q' },
      { value: 1e18, symbol: 'Qi' },
    ];
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const item = lookup.findLast((item) => num >= item.value);
    return item
      ? (num / item.value)
          .toFixed(digits)
          .replace(regexp, '')
          .concat(item.symbol)
      : '0';
  };
  const progressJual = (asset.key_statistic.sell * 100).toFixed(0);
  const progressBeli = (asset.key_statistic.buy * 100).toFixed(0);
  const market = asset.features.find((x: any) => x.name == 'market');
  const stake = asset.features.find((x: any) => x.name == 'stake');
  return (
    <div className="overview-area">
      <div className="activity-subcontainer">
        <h5>{objLang.activity}</h5>
        <div className="progress-cubcontainer">
          <div className="key-progress">
            <span
              className={`${progressBeli} progress-beli`}
              style={{ width: `${progressBeli}%` }}
            ></span>
            <span
              className={`${progressJual} progress-jual`}
              style={{ width: `${progressJual}%` }}
            ></span>
          </div>
          <div className="key-progress-label">
            <label className="progress-beli">
              <span className="progress-beli"></span>
              {(asset.key_statistic.buy * 100).toFixed(0)}% {objLang.buy}
            </label>
            <label className="progress-jual">
              <span className="progress-jual"></span>
              {(asset.key_statistic.sell * 100).toFixed(0)}% {objLang.sell}
            </label>
          </div>
        </div>
        <p>
          {objLang.trade_overview.header.replaceAll('__code__', asset.code)}
        </p>
      </div>
      <div className="trade-stake-subcontainer">
        {stake && (
          <div className="card-trade-stake">
            <div className="description">
              <div className="title">
                <h5>{stake.label}</h5>
                <p>{stake.description}</p>
              </div>
              <Link href={`/${lang}/login`}>Stake</Link>
            </div>
            <Image
              src="/images/3d-icons/brankas-new-vector.png"
              className="brankas"
              alt="brankas"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        )}
        {market && (
          <div className="card-trade-stake">
            <div className="description">
              <div className="title">
                <h5>{market.label}</h5>
                <p>{market.description}</p>
              </div>
              <Link href={`/${lang}/markets/${asset.code}_${asset.currency}`}>
                Trade
              </Link>
            </div>
            <Image
              src="/images/3d-icons/iphone-new-vector.png"
              className="iphone-vector"
              alt="iphone vector"
              width={0}
              height={0}
              sizes="100%"
            />
          </div>
        )}
      </div>
      <div className="key-subcontainer">
        <h5>Key Statistic</h5>
        <div className="key-statistic-subcontainer">
          <div className="key-statistic">
            <div className="key-statistic-label">
              <TrendChartIcon2 color={'#fff'} />
              <label>{objLang.market_activity}</label>
            </div>
            <p>
              {lang == 'id'
                ? nFormatter(asset.key_statistic.market_cap, 1)
                : nFormatter2(asset.key_statistic.market_cap, 1)}
            </p>
          </div>
          <div className="key-statistic">
            <div className="key-statistic-label">
              <TrendChartIcon color={'#fff'} />
              <label>{objLang.full_value}</label>
            </div>
            <p>
              {lang == 'id'
                ? nFormatter(asset.key_statistic.fully_diluted_valuation, 1)
                : nFormatter2(asset.key_statistic.fully_diluted_valuation, 1)}
            </p>
          </div>
          <div className="key-statistic">
            <div className="key-statistic-label">
              <ChartPie color={'#fff'} />
              <label>{objLang.supply_circulate}</label>
            </div>
            <p>
              {lang == 'id'
                ? nFormatter(asset.key_statistic.circulating_supply, 1)
                : nFormatter2(asset.key_statistic.circulating_supply, 1)}
            </p>
          </div>
          <div className="key-statistic">
            <div className="key-statistic-label">
              <ChartPie2 color={'#fff'} />
              <label>{objLang.supply_maksimum}</label>
            </div>
            <p className="!text-[#71BBED]">
              {lang == 'id'
                ? nFormatter(asset.key_statistic.max_supply, 1)
                : nFormatter2(asset.key_statistic.max_supply, 1)}
            </p>
          </div>
          <div className="key-statistic">
            <div className="key-statistic-label">
              <ChartPPT color={'#fff'} />
              <label>{objLang.volume_global}</label>
            </div>
            <p className="!text-[#EB5757]">
              {lang == 'id'
                ? nFormatter(asset.key_statistic.volume_24h, 1)
                : nFormatter(asset.key_statistic.volume_24h, 1)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinTradeOverview;
