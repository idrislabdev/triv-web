"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts, { color, Legend } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobals } from '@/@core/hooks/useGlobals';
import { ChevronUpIcon } from '@/@core/components/custom-icons';
import moment from 'moment';
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
        categories: [],
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
        },
        gridLineWidth : 0
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
        max: 3,
        tickInterval: 0.1,
        opposite: true,
        gridLineDashStyle: 'longdash'
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
        name: 'shortAccount',
        type: 'column',
        stack: 1,
        yAxis: 0,
        data: [],
        color: '#EB5757',
        tooltip: {
            valueSuffix: '%'
        }
    },
    {
        name: 'longAccount',
        type: 'column',
        stack: 1,
        yAxis: 0,
        data: [],
        color: '#4DAAE9',
        tooltip: {
            valueSuffix: '%'
        }
    }
    ,{
        name: 'longShortRatio',
        type: 'line',
        data: [],
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
const RatioChart = (props: {rawChart: any}) => {
    const { rawChart } = props

    const [ data, setData ] = useState({})
    const { globals } = useGlobals();
    const [ tabActive, setTabActive] = useState("30m")
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        if (globals.theme == 'dark') {
            temp.chart.backgroundColor = '#141414'
        } else {
            temp.chart.backgroundColor = '#fff'
        }
        const rawData = rawChart.long_short_ratio_chart[tabActive];
        const categories = [] as any[];
        const longAccount = [] as any[];
        const shortAccount = [] as any[];
        const longShortRatio = [] as any[];

        rawData.forEach((item:any) => {
            categories.push(moment.unix(item.time).format('DD, HH:mm'))
            longAccount.push(item.longAccount)
            shortAccount.push(item.shortAccount)
            longShortRatio.push(item.longShortRatio)
        });
        const minVal = Math.min(...longShortRatio);
        const maxVal = Math.max(...longShortRatio);
        temp.xAxis[0].categories = categories;
        temp.series[0].data = shortAccount;
        temp.series[1].data = longAccount;
        temp.series[2].data = longShortRatio;
        temp.yAxis[1].min = minVal;
        temp.yAxis[1].max = maxVal;
        setData(temp)
    }, [setData, globals, tabActive, rawChart])

    useEffect(() => {
        fetchData();
    }, [fetchData])
    useEffect(() => {
        // HC_rounded(Highcharts)
    })
  return (
    <div className='card'>
        <div className='card-header'>
            <div className='card-title'>
                <h5>BTC Long/Short Ratio Chart</h5>
                <ChevronUpIcon />
            </div>
            <ul className='tab-time'>
                <li className={`${tabActive == '30m' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('30m')}>30m</a>
                </li>
                <li className={`${tabActive == '1h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('1h')}>1h</a>
                </li>
                <li className={`${tabActive == '4h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('4h')}>4h</a>
                </li>
                <li className={`${tabActive == '12h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('12h')}>12h</a>
                </li>
                <li className={`${tabActive == '1d' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('1d')}>1d</a>
                </li>
            </ul>
        </div>
        <HighchartsReact
            highcharts={Highcharts}
            options={data}
            containerProps = {{ className: 'w-full h-[176px]' }}
        />
    </div>
    
  )
}

export default RatioChart