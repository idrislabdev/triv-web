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
            name: 'Sell',
            y: 40,
            color: '#EB5757'
        }]
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
}
const InflowChart = () => {
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
        containerProps = {{ className: 'w-full h-[185px]' }}
    />
  )
}

export default InflowChart