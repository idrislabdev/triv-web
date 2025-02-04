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
            lineHeight: '12px',
        }

    },
    credits: {
        enabled: false
    }
}
const AnalysisChart = () => {
    const [ data, setData ] = useState({})
    const { globals } = useGlobals()
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        if (globals.theme == 'dark') {
            temp.chart.backgroundColor = '#141414'
            temp.legend.itemStyle.color = '#fff'
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
        containerProps = {{ className: 'w-full h-[250px]' }}
    />
  )
}

export default AnalysisChart