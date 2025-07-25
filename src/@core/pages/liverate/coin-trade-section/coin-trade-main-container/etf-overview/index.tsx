import {
  ChartColumnGrowIcon,
  ChartDoughnutIcon,
  ChartPie3Icon,
  ChartStatsIcon,
  InflowIcon,
  OutflowIcon,
} from '@/@core/components/custom-icons';
import React, { useCallback, useEffect, useState } from 'react';
import EtfCard from './etf-card';
import axios from 'axios';
import { nFormatter2 } from '@/@core/utils/general';
import EtfCardNew from './etf-card-new';

const EtfOverview = (props: { asset: any }) => {
  const { asset } = props;
  const [totalObj, setTotalObj] = useState(
    {} as { total_aum: 0; total_marketcap: 0; total_volume: 0 }
  );
  const [flowData, setFlowData] = useState({} as any);
  const [dataList, setDataList] = useState([] as any);
  const [tabActive, setTabActive] = useState('1d');
  const fetchData = useCallback(async () => {
    const resp = await axios.get(
      `https://ins.triv.id/api/v1/asset-insights?currency=${asset.code}&session=etf_flows`
    );
    const data = resp.data.etf_flows;
    if (data.flow_data[tabActive]) {
      setTotalObj({
        total_aum: data.total_aum,
        total_marketcap: data.total_marketcap,
        total_volume: data.total_volume,
      });
      setFlowData(data.flow_data[tabActive]);
      setDataList(data.data_list);
    }
  }, [tabActive]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className="etf-overview-area">
      <div className="header">
        <h5>Bitcoin ETF Overview</h5>
        <p>Last update : Nov 01, 2024 - 2:32</p>
      </div>
      <div className="sub-header">
        <h6>Net Inflow</h6>
        <ul className="tab-time">
          <li className={`${tabActive == '1d' ? 'active' : ''}`}>
            <a onClick={() => setTabActive('1d')}>24h</a>
          </li>
          <li className={`${tabActive == '7d' ? 'active' : ''}`}>
            <a onClick={() => setTabActive('7d')}>7d</a>
          </li>
          <li className={`${tabActive == '30d' ? 'active' : ''}`}>
            <a onClick={() => setTabActive('30d')}>30d</a>
          </li>
          <li className={`${tabActive == '90d' ? 'active' : ''}`}>
            <a onClick={() => setTabActive('90d')}>90d</a>
          </li>
        </ul>
      </div>
      <div className="card-overview">
        <div className="sub-overview">
          <div className="row">
            <label>
              <span>
                <ChartColumnGrowIcon />
              </span>
              Total Volume
            </label>
            <p>${nFormatter2(totalObj.total_volume, 1)}</p>
          </div>
          <div className="row">
            <label>
              <span>
                <ChartStatsIcon />
              </span>
              Total Marketcap
            </label>
            <p>${nFormatter2(totalObj.total_marketcap, 1)}</p>
          </div>
          <div className="row">
            <label>
              <span>
                <ChartPie3Icon />
              </span>
              Total AUM
            </label>
            <p>${nFormatter2(totalObj.total_aum, 1)}</p>
          </div>
        </div>
        <div className="sub-overview">
          <div className="row">
            <label>
              <span>
                <InflowIcon />
              </span>
              Total Inflow
            </label>
            <p
              className={
                flowData.total_inflow >= 0 ? 'text-plus' : 'text-minus'
              }
            >
              $
              {nFormatter2(
                flowData.total_inflow * (flowData.total_inflow < 0 ? -1 : 1),
                1
              )}
            </p>
          </div>
          <div className="row">
            <label>
              <span>
                <OutflowIcon />
              </span>
              Total Outflow
            </label>
            <p
              className={
                flowData.total_outflow >= 0 ? 'text-plus' : 'text-minus'
              }
            >
              $
              {nFormatter2(
                flowData.total_outflow * (flowData.total_outflow < 0 ? -1 : 1),
                1
              )}
            </p>
          </div>
          <div className="row">
            <label>
              <span>
                <ChartDoughnutIcon />
              </span>
              Net Inflow
            </label>
            <p
              className={flowData.net_inflow >= 0 ? 'text-plus' : 'text-minus'}
            >
              $
              {nFormatter2(
                flowData.net_inflow * (flowData.net_inflow < 0 ? -1 : 1),
                1
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="sub-cards">
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').name
                  : 'GBTC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').ticker
                  : 'GBTC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'GBTC')
                  ? dataList.find((x: any) => x.ticker == 'GBTC').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').name
                  : 'FBTC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').ticker
                  : 'FBTC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').name
                  : 'BITO'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').ticker
                  : 'BITO'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BITO')
                  ? dataList.find((x: any) => x.ticker == 'BITO').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').name
                  : 'IBIT'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').ticker
                  : 'IBIT'
              }
              price={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').name
                  : 'FBTC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').ticker
                  : 'FBTC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'FBTC')
                  ? dataList.find((x: any) => x.ticker == 'FBTC').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').name
                  : 'BITB'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').ticker
                  : 'BITB'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BITB')
                  ? dataList.find((x: any) => x.ticker == 'BITB').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').name
                  : 'ARKB'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').ticker
                  : 'ARKB'
              }
              price={
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'ARKB')
                  ? dataList.find((x: any) => x.ticker == 'ARKB').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').name
                  : 'HODL'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').ticker
                  : 'HODL'
              }
              price={
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'HODL')
                  ? dataList.find((x: any) => x.ticker == 'HODL').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').name
                  : 'EZBC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').ticker
                  : 'EZBC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'EZBC')
                  ? dataList.find((x: any) => x.ticker == 'EZBC').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').name
                  : 'BTCO'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').ticker
                  : 'BTCO'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BTCO')
                  ? dataList.find((x: any) => x.ticker == 'BTCO').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').name
                  : 'BTF'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').ticker
                  : 'BTF'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BTF')
                  ? dataList.find((x: any) => x.ticker == 'BTF').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').name
                  : 'BRRR'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').ticker
                  : 'BRRR'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BRRR')
                  ? dataList.find((x: any) => x.ticker == 'BRRR').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').name
                  : 'BITS'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').ticker
                  : 'BITS'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BITS')
                  ? dataList.find((x: any) => x.ticker == 'BITS').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').name
                  : 'ARKA'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').ticker
                  : 'ARKA'
              }
              price={
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'ARKA')
                  ? dataList.find((x: any) => x.ticker == 'ARKA').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').name
                  : 'DEFI'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').ticker
                  : 'DEFI'
              }
              price={
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'DEFI')
                  ? dataList.find((x: any) => x.ticker == 'DEFI').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').name
                  : 'IBIT'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').ticker
                  : 'IBIT'
              }
              price={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'IBIT')
                  ? dataList.find((x: any) => x.ticker == 'IBIT').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').name
                  : 'BITC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').ticker
                  : 'BITC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BITC')
                  ? dataList.find((x: any) => x.ticker == 'BITC').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').name
                  : 'BETH'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').ticker
                  : 'BETH'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BETH')
                  ? dataList.find((x: any) => x.ticker == 'BETH').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').name
                  : 'BTCW'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').ticker
                  : 'BTCW'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BTCW')
                  ? dataList.find((x: any) => x.ticker == 'BTCW').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').name
                  : 'BETE'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').ticker
                  : 'BETE'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BETE')
                  ? dataList.find((x: any) => x.ticker == 'BETE').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').name
                  : 'ARKC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').ticker
                  : 'ARKC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'ARKC')
                  ? dataList.find((x: any) => x.ticker == 'ARKC').marketCap
                  : ''
              }
            />
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').name
                  : 'ARKY'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').ticker
                  : 'ARKY'
              }
              price={
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'ARKY')
                  ? dataList.find((x: any) => x.ticker == 'ARKY').marketCap
                  : ''
              }
            />
          </div>
        )}
        {dataList.length > 0 && (
          <div className="row">
            <EtfCardNew
              title={
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').name
                  : 'BTC'
              }
              subTitle={
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').ticker
                  : 'BTC'
              }
              price={
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').price
                  : ''
              }
              priceChange={`${
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').priceChange
                  : ''
              }`}
              volume={
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').volumeUsd
                  : ''
              }
              marketCap={
                dataList.find((x: any) => x.ticker == 'BTC')
                  ? dataList.find((x: any) => x.ticker == 'BTC').marketCap
                  : ''
              }
            />
            <div className="card !border-0"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EtfOverview;
