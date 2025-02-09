import { ChartColumnGrowIcon, ChartDoughnutIcon, ChartPie3Icon, ChartStatsIcon, InflowIcon, OutflowIcon } from '@/@core/components/custom-icons'
import React from 'react'
import EtfCard from './etf-card'

const EtfOverview = () => {
  return (
    <div className='etf-overview-area'>
        <div className='header'>
            <h5>Bitcoin ETF Overview</h5>
            <p>Last update : Nov 01, 2024 - 2:32</p>
        </div>
        <div className='sub-header'>
            <h6>Net Inflow</h6>
            <ul className='tab-time'>
                <li className='active'><a>24h</a></li>
                <li><a>7d</a></li>
                <li><a>30d</a></li>
                <li><a>90d</a></li>
            </ul>
        </div>
        <div className='card-overview'>
            <div className='sub-overview'>
                <div className='row'>
                    <label>
                        <span><ChartColumnGrowIcon /></span>
                        Total Volume
                    </label>
                    <p>$3.30B</p>
                </div>
                <div className='row'>
                    <label>
                        <span><ChartStatsIcon /></span>
                        Total Marketcap
                    </label>
                    <p>$71.72B</p>
                </div>
                <div className='row'>
                    <label>
                        <span><ChartPie3Icon /></span>
                        Total AUM
                    </label>
                    <p>$52.17B</p>
                </div>
            </div>
            <div className='sub-overview'>
                <div className='row'>
                    <label>
                        <span><InflowIcon /></span>
                        Total Inflow
                    </label>
                    <p className='!text-[#318AC6]'>$3.30B</p>
                </div>
                <div className='row'>
                    <label>
                        <span><OutflowIcon /></span>
                        Total Outflow
                    </label>
                    <p className='!text-[#EB5757]'>$71.72B</p>
                </div>
                <div className='row'>
                    <label>
                        <span><ChartDoughnutIcon /></span>
                        Net Inflow
                    </label>
                    <p className='!text-[#318AC6]'>$52.17B</p>
                </div>
            </div>
        </div>
        <div className='sub-cards'>
            <div className='row'>
                <EtfCard 
                    title={`iShares Bitcoin Trust`} 
                    subTitle={`IBIT`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
                <EtfCard 
                    title={`Fidelity Wise Origin Bitcoin Fund`} 
                    subTitle={`FBTC`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
            </div>
            <div className='row'>
                <EtfCard 
                    title={`ProShares Bitcoin ETF`} 
                    subTitle={`BITO`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
                <EtfCard 
                    title={`iShares Bitcoin Trust`} 
                    subTitle={`IBIT`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
            </div>
            <div className='row'>
                <EtfCard 
                    title={`Fidelity Wise Origin Bitcoin Fund`} 
                    subTitle={`FBTC`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
                <EtfCard 
                    title={`ProShares Bitcoin ETF`} 
                    subTitle={`BITO`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
            </div>
            <div className='row'>
                <EtfCard 
                    title={`ProShares Bitcoin ETF`} 
                    subTitle={`BITO`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
                <EtfCard 
                    title={`iShares Bitcoin Trust`} 
                    subTitle={`IBIT`} 
                    price={`$39.78`} 
                    priceChange={`-1.1 (-2.69%)`} 
                    volume={`$1.93B`} 
                    marketCap={`$29.16B`} 
                />
            </div>

        </div>
    </div>
  )
}

export default EtfOverview