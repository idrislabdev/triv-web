"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobals } from '@/@core/hooks/useGlobals';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        type: "column"
    },
    legend: {
        enabled: false
    },
    credit: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        // pointFormat: "",
        // fontWeight: "bold",
        // useHTML: true,
        // shadow: false,
        // lineWidth: 400,
        // borderRadius: 0,
        // padding: 8
        enabled: false,
    },
    xAxis: {
        categories: ["a", "b", "c", "d", "e"],
        visible: false
    },
    yAxis: {
        title: {
            text: null
        },
        labels: {
            enabled: false
        },
        gridLineWidth: 0,
        minorGridLineWidth: 0,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#EBEEF4',
            zIndex: 10
        }],
        stackLabels: {
            enabled: true,
        }
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 30,
                format: '<span style="color:{point.color}; font-weight:400">{point.y}</span>',
            }],
            showInLegend: true,
        }
    },
    credits: {
        enabled: false
    },
    series: [
        {
            name: "inflow",
            data: [1937.45, -568.67, -383.92, 2173.02, 2004.38],
            color: '#4DAAE9',
            negativeColor: '#EB5757',
        },
    ],
}
const MoneyFlowChart = () => {
    const [ data, setData ] = useState({})
    const { globals } = useGlobals();
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        if (globals.theme == 'dark') {
            temp.chart.backgroundColor = '#141414'
        } else {
            temp.chart.backgroundColor = '#fff'
        }
        setData(temp)
    }, [setData, globals])

    useEffect(() => {
        fetchData();
    }, [fetchData])
    useEffect(() => {
        // HC_rounded(Highcharts)
    })
  return (
    <HighchartsReact
        highcharts={Highcharts}
        options={data}
        containerProps = {{ className: 'w-full h-[260px]' }}
    />
  )
}

export default MoneyFlowChart