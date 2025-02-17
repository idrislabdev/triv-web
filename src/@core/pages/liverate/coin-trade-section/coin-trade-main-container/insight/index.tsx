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
                                <label><span></span>Orders</label>
                                <label><span></span>Buy(USD)</label>
                                <label><span></span>Sell(USD)</label>
                                <label><span></span>Inflow(USD)</label>
                            </div>
                            <div className='info-body'>
                                <label><span></span>Type</label>
                                <label><span className='dot-plus'></span>20.993.5051</label>
                                <label><span className='dot-minus'></span>20.645,3689</label>
                                <label><span></span>348,1362</label>
                            </div>
                            <div className='info-body'>
                                <label><span></span>total</label>
                                <label><span></span>20.993.5051</label>
                                <label><span></span>20.645,3689</label>
                                <label><span></span>348,1362</label>
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