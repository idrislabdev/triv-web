"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { ChevronUpIcon } from '@/@core/components/custom-icons';
import InflowChart from './inflow-chart';
import MoneyFlowChart from './moneyflow-chart';
import RatioChart from './ratio-chart';
import axios from 'axios';

const CoinTradeInsight = (props: {lang:string}) => {
    const { lang } = props
    const [moneyInflow, setMoneyInflow] = useState({} as any)
    const [longShort, setLongShort] = useState({} as any)

    const fetchData = useCallback(async () => {
        const resp = await axios.get(`https://ins.triv.id/api/v1/asset-insights?currency=BTC&session=market_insight`)
        const { market_insights } = resp.data
        setMoneyInflow(market_insights.money_inflow)
        setLongShort(market_insights.long_short_ratio_chart)
    },[])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='insight-area'>
            <div className='row-1'>
                {moneyInflow.money_inflow &&  <MoneyFlowChart rawChart={moneyInflow}/> }
                {/* <div className='card'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <h5>5d large order net inflow (USD)</h5>
                            <ChevronUpIcon />
                        </div>
                        <div className='card-subtitle'>
                            <p>5 Days Large Inflow : <span className='text-plus'>1.837.9387</span></p>
                        </div>
                        <ul className='tab-time'>
                            <li><a>15m</a></li>
                            <li><a>30m</a></li>
                            <li><a>1h</a></li>
                            <li><a>2h</a></li>
                            <li className='active'><a>4h</a></li>
                            <li><a>1d</a></li>
                        </ul>
                    </div>
                    <InflowChart />
                </div> */}
            </div>
            <div className='row-2'>
                {longShort.long_short_ratio_chart && <RatioChart rawChart={longShort}/>}
            </div>
        </div>
    )
}

export default CoinTradeInsight