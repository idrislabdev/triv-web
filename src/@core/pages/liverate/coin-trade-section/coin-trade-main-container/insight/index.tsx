import { IBlog } from '@/@core/@types/interfaces';
import CardNewsBlog from '@/@core/components/cards/card-news-blog';
import React from 'react'
import { ChevronUpIcon } from '@/@core/components/custom-icons';
import InflowChart from './inflow-chart';
import MoneyFlowChart from './moneyflow-chart';
import RatioChart from './ratio-chart';

const CoinTradeInsight = (props: {lang:string}) => {
    const { lang } = props

    return (
        <div className='insight-area'>
            <div className='row-1'>
                <div className='card card-money-flow'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <h5>Money Flow Analysis</h5>
                            <ChevronUpIcon />
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
                    <MoneyFlowChart />
                    <div className='card-footer'>
                        <div className='info'>
                            <div className='info-header'>
                                <label>Orders</label>
                                <label>Buy(USD)</label>
                                <label>Sell(USD)</label>
                                <label>Inflow(USD)</label>
                            </div>
                            <div className='info-body'>
                                <label>Type</label>
                                <label>20.993.5051</label>
                                <label>20.645,3689</label>
                                <label>348,1362</label>
                            </div>
                            <div className='info-body'>
                                <label>total</label>
                                <label>20.993.5051</label>
                                <label>20.645,3689</label>
                                <label>348,1362</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <h5>5d large order net inflow (USD)</h5>
                            <ChevronUpIcon />
                        </div>
                        <div className='card-subtitle'>
                            <p>5 Days Large Inflow : <span>1.837.9387</span></p>
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
                </div>
            </div>
            <div className='row-2'>
                <div className='card'>
                    <div className='card-header'>
                        <div className='card-title'>
                            <h5>BTC Long/Short Ratio Chart</h5>
                            <ChevronUpIcon />
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
                    <RatioChart />
                </div>
            </div>
        </div>
    )
}

export default CoinTradeInsight