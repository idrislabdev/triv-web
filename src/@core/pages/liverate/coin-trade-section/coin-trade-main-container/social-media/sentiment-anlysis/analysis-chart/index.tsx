"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobals } from '@/@core/hooks/useGlobals';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        type: 'pie',
    },
    title: {
        verticalAlign: 'middle',
        floating: true,
        text: '',
        style: {
            color: '#646A80',
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '15px',
        },
        y: 30
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
                distance: 10,
                format: '{point.y}%',
                style: {
                    fontSize: '10px'
                }
            }],
            showInLegend: true
        },
        pie: {
            size: 150
        }
    },
    series: [{
        name: 'Sentimen Analytic',
        colorByPoint: true,
        innerSize: '75%',
        data: []
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
            lineHeight: '12px',
        }

    },
    credits: {
        enabled: false
    }
}
const AnalysisChart = (props: {dataSentiment:any}) => {
    const { dataSentiment } = props

    const [ data, setData ] = useState({})
    const { globals } = useGlobals()
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        const positive = dataSentiment.positive
        const negative = dataSentiment.negative
        const neutral = dataSentiment.neutral
        const total = positive + negative + neutral
        let text = ''
        temp.series[0].data = [
            {
                name: 'Positive',
                y: Math.round(positive / total * 100),
                color: '#4DAAE9'
            }, {
                name: 'Netral',
                y: Math.round(neutral / total * 100),
                color: '#EB5757'
            }, {
                name: 'Negative',
                y: Math.round(negative / total * 100),
                color: '#FF7F17'
            }
        ]
        if ((positive > negative ) && (positive > neutral)) {
            text = 'Positive'
        } else if ((negative > positive ) && (negative > neutral)) {
            text = 'Negative'
        } else {
            text = 'Neutral'
        }
        temp.title.text = text

        if (globals.theme == 'dark') {
            temp.chart.backgroundColor = '#141414'
            temp.legend.itemStyle.color = '#fff'
        } else {
            temp.chart.backgroundColor = '#fff'
        }
        setData(temp)
    }, [setData, globals, dataSentiment])

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