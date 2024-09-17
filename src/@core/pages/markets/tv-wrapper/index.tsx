"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Script from "next/script";
import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "../../../../../public/static/charting_library/charting_library";
import { useGlobals } from "@/@core/hooks/useGlobals";


const TvChart = dynamic(
  () =>
    import("@/@core/components/tv-chart").then((mod) => mod.TvChart),
  { ssr: false }
);

export default function MarketsTvWrapper(props: {symbol:string}) {
  const { symbol } = props;
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [defaultWidget, setDefaultWidget] = useState<Partial<ChartingLibraryWidgetOptions>>({})
  const { globals } = useGlobals()


  useEffect(() => {
    const theme = localStorage.getItem('mode')
    console.log(globals)
    setDefaultWidget({
      symbol: symbol,
      interval: "15" as ResolutionString,
      library_path: "/static/charting_library/",
      custom_css_url: "/static/trading-view.css",
      locale: "en",
      charts_storage_url: "https://saveload.tradingview.com",
      charts_storage_api_version: "1.1",
      client_id: "tradingview.com",
      user_id: "public_user_id",
      fullscreen: false,
      autosize: true,
      theme: globals.theme
    })
  }, [symbol, setDefaultWidget, globals])
  
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />
      {isScriptReady &&  <TvChart defaultWidget={defaultWidget} /> }
    </>
  );
}
