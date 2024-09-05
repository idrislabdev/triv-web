"use client"

import dynamic from "next/dynamic";
import { useState } from "react";
import Script from "next/script";

import {
  ChartingLibraryWidgetOptions,
  ResolutionString,
} from "../../../../../public/static/charting_library/charting_library";


const TVChartContainer = dynamic(
  () =>
    import("@/@core/components/tv-chart-container").then((mod) => mod.TVChartContainer),
  { ssr: false }
);

export default function LiverateCoinChartWrapper(props: {symbol:string}) {
  const { symbol } = props;
  const [isScriptReady, setIsScriptReady] = useState(false);

  const defaultWidgetProps: Partial<ChartingLibraryWidgetOptions> = {
    symbol: symbol,
    interval: "15" as ResolutionString,
    library_path: "/static/charting_library/",
    locale: "en",
    charts_storage_url: "https://saveload.tradingview.com",
    charts_storage_api_version: "1.1",
    client_id: "tradingview.com",
    user_id: "public_user_id",
    fullscreen: false,
    autosize: true,
  };
  return (
    <>
      <Script
        src="/static/datafeeds/udf/dist/bundle.js"
        strategy="lazyOnload"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />
      {isScriptReady && 
	  	<TVChartContainer {...defaultWidgetProps} />

	  }
      
    </>
  );
}
