"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts, { color } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
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
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        // temp.plotOptions = {
        //     series: {
        //         marker: false,
        //         fillColor: {
        //             linearGradient: [0, 0, 0, 300],
        //             stops: [
        //                 [0, Highcharts.color('#39BFB6').setOpacity(1).get('rgba')],
        //                 [1, Highcharts.color('#B1F8B900').setOpacity(0.3).get('rgba')],
        //             ]
        //         }
        //     }
        // }
        // temp.series  = [
        //     {
        //         name: 'A',
        //         data: [3000, 4000, 3500, 4500, 4600, 1500, 2900],
        //         color: '#04FF00',
        //         fillColor: {
        //             linearGradient: [0, 0, 0, 200],
        //             stops: [
        //                 [0, Highcharts.color('#39BFB6').setOpacity(1).get('rgba')],
        //                 [1, Highcharts.color('#B1F8B900').setOpacity(0.3).get('rgba')],
        //             ]
        //         }
        //     },
        // ]
        setData(temp)
    }, [setData])

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