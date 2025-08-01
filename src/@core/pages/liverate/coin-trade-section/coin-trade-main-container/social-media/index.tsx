'use client';

import React, { useCallback, useEffect, useState } from 'react';
import SocialMediaMetric from './social-metrics';
import SentimenAnalysis from './sentiment-anlysis';
import PricePerformance from './price-performance';
// import socmed_data from '../../sample-data/socmed'
import axios from 'axios';
const CoinTradeSocialMedia = (props: {
  asset: any;
  lang: string;
  objLang: any;
}) => {
  const { asset, lang, objLang } = props;
  const [socmedData, setSocmedData] = useState({} as any);
  const fetchData = useCallback(async () => {
    const resp = await axios.get(
      `https://ins.triv.id/api/v1/asset-insights?currency=${asset.code}&session=socmed`
    );
    const { socmed_data } = resp.data;
    setSocmedData(socmed_data);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="social-media-area">
      <div className="row-1">
        {socmedData.social_metrics && (
          <SocialMediaMetric
            data={socmedData.social_metrics}
            objLang={objLang}
          />
        )}
        {socmedData.sentiment_analytics && (
          <SentimenAnalysis
            data={socmedData.sentiment_analytics}
            objLang={objLang}
          />
        )}
      </div>
      <div className="row-2">
        {socmedData.price_performance && (
          <PricePerformance data={socmedData.price_performance} />
        )}
      </div>
    </div>
  );
};

export default CoinTradeSocialMedia;
