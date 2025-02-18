"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts, { color, Legend } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobals } from '@/@core/hooks/useGlobals';
// import HC_rounded from "highcharts-rounded-corners";

const options = {
    chart: {
        zoomType: 'xy'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: [{
        categories: ['10, 11:00', '10, 19:00', '11, 03:00', '11, 11:00', 
            '11, 19:00', '12, 03:00','12, 11:00', '12, 19:00', '13, 03:00', 
            '13, 11:00', '13, 19:00', '14, 03:00', '14, 11:00', '14, 19:00'
        ],
        labels: {
            style: {
                fontSize: '8px',
                fontWeight: '500',
                color: '#838899'
            }
        },
        crosshair: true
    }],
    yAxis: [
    { // Primary yAxis
        max: 100,
        labels: {
            format: '{value}%',
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '',
            style: {
                // color: Highcharts.getOptions().colors[1]
            }
        }
    },
    { // Secondary yAxis
        title: {
            text: '',
            style: {
                // color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value}',
            style: {
                // color: Highcharts.getOptions().colors[0]
            }
        },
        max: 100,
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    plotOptions: {
        series: {
            pointWidth: 10,
            lineWidth: 1,
        },
        column: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'ratio1',
        type: 'column',
        stack: 1,
        yAxis: 0,
        data: [50,50,50,50,50,50,50,50,50,50,50,50,50,50],
        color: '#EB5757',
        tooltip: {
            valueSuffix: '%'
        }
    },
    {
        name: 'ratio2',
        type: 'column',
        stack: 1,
        yAxis: 0,
        data: [50,50,50,50,50,50,50,50,50,50,50,50,50,50],
        color: '#4DAAE9',
        tooltip: {
            valueSuffix: '%'
        }
    }
    ,{
        name: 'btc',
        type: 'spline',
        data: [40,30,60,40,10,60,30,50,40,10,70,30,20,60],
        color: '#C1C3CC',
        tooltip: {
            valueSuffix: ''
        },
        yAxis: 1,
        marker: {
            radius: 3,
            fillColor: '#2E3339'
        }
    }],
    legend: {
        enabled: false
    },
    credits: {
        enabled: false
    }
}
const RatioChart = () => {
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
        containerProps = {{ className: 'w-full h-[176px]' }}
    />
  )
}

export default RatioChart