"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        type: 'pie',
    },
    title: {
        text: '',
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.0f}%</b>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 30,
                format: '{point.y}%',
                style: {
                    fontSize: '10px'
                }
            }],
            showInLegend: true
        }
    },
    series: [{
        name: 'Registrations',
        colorByPoint: true,
        innerSize: '75%',
        data: [{
            name: 'Buy',
            y: 60,
            color: '#4DAAE9'
        }, {
            name: 'Hold',
            y: 25,
            color: '#EB5757'
        }, {
            name: 'Sell',
            y: 15,
            color: '#FF7F17'
        }]
    }],
    legend: {
        enabled: true,
        verticalAlign: 'top',
        layout: 'horizontal',
        align: 'center',
        symbolHeight: 6,
        symbolWidth: 6,
        symbolRadius: 6,
        itemStyle: {
            fontSize: '8px',
            lineHeight: '12px'
        }

    },
    credits: {
        enabled: false
    }
}
const AnalysisChart = () => {
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
        containerProps = {{ className: 'w-full h-[250px]' }}
    />
  )
}

export default AnalysisChart