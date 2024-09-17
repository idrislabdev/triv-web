"use client"

import { useEffect, useRef } from "react";
import { ChartingLibraryWidgetOptions, LanguageCode, ResolutionString, widget } from "../../../../public/static/charting_library";

export const TVChartContainer = (props: {defaultWidget:Partial<ChartingLibraryWidgetOptions>}) => {
	const { defaultWidget } = props

	const chartContainerRef =
		useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

	useEffect(() => {
		const widgetOptions: ChartingLibraryWidgetOptions = {
			symbol: defaultWidget.symbol,
			// BEWARE: no trailing slash is expected in feed URL
			datafeed: new (window as any).Datafeeds.UDFCompatibleDatafeed(
				"https://cihuy.triv.id/api/v2/udf-datafeed",
				undefined,
				{
					maxResponseLength: 1000,
					expectedOrder: "latestFirst",
				}
			),
			interval: defaultWidget.interval as ResolutionString,
			container: chartContainerRef.current,
			library_path: defaultWidget.library_path,
			locale: defaultWidget.locale as LanguageCode,
			disabled_features: ["use_localstorage_for_settings"],
			enabled_features: ["study_templates"],
			charts_storage_url: defaultWidget.charts_storage_url,
			charts_storage_api_version: defaultWidget.charts_storage_api_version,
			client_id: defaultWidget.client_id,
			user_id: defaultWidget.user_id,
			fullscreen: defaultWidget.fullscreen,
			autosize: defaultWidget.autosize,
			custom_css_url: defaultWidget.custom_css_url,
			theme: defaultWidget.theme
		};

		if (defaultWidget.theme === 'dark') {
			widgetOptions.overrides = {
				"paneProperties.background": "#000000",
				"paneProperties.backgroundType": "solid"
			}
		}

		const tvWidget = new widget(widgetOptions);

		tvWidget.onChartReady(() => {
			tvWidget.headerReady().then(() => {
				const button = tvWidget.createButton();
				button.setAttribute("title", "Click to show a notification popup");
				button.classList.add("apply-common-tooltip");
				button.addEventListener("click", () =>
					tvWidget.showNoticeDialog({
						title: "Notification",
						body: "TradingView Charting Library API works correctly",
						callback: () => {
							console.log("Noticed!");
						},
					})
				);

				button.innerHTML = "Check API";
			});
		});

		return () => {
			tvWidget.remove();
		};
	}, [props]);

	return (
		<>
			<div ref={chartContainerRef} className="h-[500px] w-full" />
		</>
	);
};
