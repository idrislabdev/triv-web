"use client"
import React, { useCallback, useEffect, useState } from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useGlobals } from '@/@core/hooks/useGlobals';
import { ChevronUpIcon } from '@/@core/components/custom-icons';
import { formatterNumber } from '@/@core/utils/general';
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
            y: 0,
            color: '#4DAAE9'
        }, {
            name: 'Sell',
            y: 0,
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
const InflowChart = (props: {rawChart: any}) => {
    const { rawChart } = props
    const [ data, setData ] = useState({})
    const [ dataChart, setDataChart] = useState({} as any)
    const [ tabActive, setTabActive] = useState("15m")
    const { globals } = useGlobals()
    const fetchData = useCallback(() => {
        const temp = JSON.parse(JSON.stringify(options));
        if (globals.theme == 'dark') {
            temp.chart.backgroundColor = '#141414'
        } else {
            temp.chart.backgroundColor = '#fff'
        }

        if (rawChart.money_inflow[tabActive]) {
            const total = rawChart.money_inflow[tabActive].total_buy + rawChart.money_inflow[tabActive].total_sell;
            const buy = rawChart.money_inflow[tabActive].total_buy / total * 100
            const sell = rawChart.money_inflow[tabActive].total_sell / total * 100
    
            temp.series[0].data[0].y = Math.round(buy);
            temp.series[0].data[1].y = Math.round(sell);
            setDataChart(rawChart.money_inflow[tabActive])
            setData(temp)
        }

    }, [setData, globals, tabActive, rawChart])

    useEffect(() => {
        fetchData();
    }, [fetchData])

  return (
    
    <div className='card card-money-flow'>
        <div className='card-header'>
            <div className='card-title'>
                <h5>Money Flow Analysis</h5>
                <ChevronUpIcon />
            </div>
            <ul className='tab-time'>
                <li className={`${tabActive == '15m' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('15m')}>15m</a>
                </li>
                <li className={`${tabActive == '30m' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('30m')}>30m</a>
                </li>
                <li className={`${tabActive == '1h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('1h')}>1h</a>
                </li>
                <li className={`${tabActive == '2h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('2h')}>2h</a>
                </li>
                <li className={`${tabActive == '4h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('4h')}>4h</a>
                </li>
                <li className={`${tabActive == '1d' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('1d')}>1d</a>
                </li>
            </ul>
        </div>
        <HighchartsReact
            highcharts={Highcharts}
            options={data}
            containerProps = {{ className: 'w-full h-[185px]' }}
        />
        <div className='card-footer'>
            <div className='info'>
                <div className='info-header'>
                    <label><span></span>Orders</label>
                    <label><span></span>Buy(USD)</label>
                    <label><span></span>Sell(USD)</label>
                    <label><span></span>Inflow(USD)</label>
                </div>
                <div className='info-body'>
                    <label><span></span>Type</label>
                    <label><span className='dot-plus'></span>{formatterNumber(Math.round(dataChart.total_buy))}</label>
                    <label><span className='dot-minus'></span>{formatterNumber(Math.round(dataChart.total_sell))}</label>
                    <label><span></span>{formatterNumber(Math.round(dataChart.net_inflow))}</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default InflowChart