"use client"

import { ChevronUpIcon } from '@/@core/components/custom-icons'
import { nFormatter } from '@/@core/utils/general'
import moment from 'moment'
import React, { useCallback, useEffect, useState } from 'react'

const PricePerformance = (props: {data:any}) => {
    const { data } = props
    const [ tabActive, setTabActive] = useState("24h")
    const [ dataPerformance, setDataPerformance ] = useState({} as any)
    const [ percentValue, setPercentValue ] = useState(0);
    const dataAllTime = data.periods.all_time

    const fetchData = useCallback(() => {
        if (data.periods[tabActive]) {
            setDataPerformance(data.periods[tabActive])
            const close = data.periods[tabActive].quote.IDR.close
            const low = data.periods[tabActive].quote.IDR.low
            const high = data.periods[tabActive].quote.IDR.high
            const total = low + high;
            const percentage  = close / total * 100
            setPercentValue(percentage)
        }

    }, [data, setDataPerformance, tabActive])

    useEffect(() => {
        fetchData();
    }, [fetchData])
    
    return (
            <div className='card card-performance'>
            <div className='card-header'>
                <div className='card-title'>
                    <h5>Price Performance</h5>
                    <ChevronUpIcon />
                </div>
                <ul className='tab-time'>
                    <li className={`${tabActive == '24h' ? 'active' : ''}`}>
                    <a onClick={() => setTabActive('24h')}>24j</a>
                        </li>
                    <li className={`${tabActive == '365d' ? 'active' : ''}`}>
                        <a onClick={() => setTabActive('365d')}>52w</a>
                    </li>
                    <li className={`${tabActive == 'all_time' ? 'active' : ''}`}>
                        <a onClick={() => setTabActive('all_time')}>All Time</a>
                    </li>
                </ul>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='row-content child'>
                        <label>Rendah</label>
                        <p>Tinggi</p>
                    </div>
                    <div className='row-content'>
                        <label>IDR{dataPerformance.quote && dataPerformance.quote.IDR ? nFormatter(dataPerformance.quote.IDR.low, 2) : 0}</label>
                        <p>IDR{dataPerformance.quote && dataPerformance.quote.IDR ? nFormatter(dataPerformance.quote.IDR.high, 2) : 0}</p>
                    </div>
                    <div className="slider-container-lite">
                        <div className="slider-thumb" style={{left: `${percentValue}%`}}></div>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-content'>
                        <label>All-time high</label>
                        <p>IDR{dataAllTime.quote && dataAllTime.quote.IDR ? nFormatter(dataAllTime.quote.IDR.high, 2) : 0}</p>
                    </div>
                    <div className='row-content child'>
                        <label>{moment(dataPerformance.high_timestamp).format('MMM DD, YYYY')} ({moment(dataPerformance.high_timestamp).fromNow()})</label>
                        <p className={`${dataAllTime.quote.IDR.price_change > 0 ? 'text-plus' : 'text-minus'}`}>{nFormatter(dataAllTime.quote.IDR.price_change, 1)}%</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='row-content'>
                        <label>All-time low</label>
                        <p>IDR{dataAllTime.quote && dataAllTime.quote.IDR ? nFormatter(dataAllTime.quote.IDR.low, 2) : 0}</p>
                    </div>
                    <div className='row-content child'>
                        <label>{moment(dataPerformance.low_timestamp).format('MMM DD, YYYY')} ({moment(dataPerformance.high_timestamp).fromNow()})</label>
                        <p className={`${dataAllTime.quote.IDR.percent_change > 0 ? 'text-plus' : 'text-minus'}`}>{nFormatter(dataAllTime.quote.IDR.percent_change, 1)}%</p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricePerformance