import React, { useState } from 'react'
import LiverateCoinChartWrapper from '../../coin-chart-wrapper'
import CardNewsBlog from '@/@core/components/cards/card-news-blog'
import { IBlog, ICoin } from '@/@core/@types/interfaces'
import CoinTradeOverview from './overview'
import CoinTradeNews from './news'
import CoinTradeInsight from './insight'
import CoinTradeSocialMedia from './social-media'

const CoinTradeMainContainer = (props: {lang:string, objLang:any, blogs:IBlog[], asset:any, coin:ICoin}) => {
    const { lang, objLang, blogs, asset, coin } = props

    const [tabActive, setTabActive] = useState('overview')
    return (
        <div className='coin-main-container trade'>
            <div className='chart-subcontainer'>
                <LiverateCoinChartWrapper symbol={coin.currency.toUpperCase()+'IDR'} />
            </div>
            <div className='main-subcontainer'>
                <ul className='tab-main'>
                    <li className={tabActive == 'overview' ? 'active' : ''}>
                        <a onClick={() => setTabActive('overview')}>Overview</a>
                    </li>
                    <li className={tabActive == 'insight' ? 'active' : ''}>
                        <a onClick={() => setTabActive('insight')}>Market Insight</a>
                    </li>
                    <li className={tabActive == 'social_media' ? 'active' : ''}>
                        <a onClick={() => setTabActive('social_media')}>Social Media Data</a>
                    </li>
                    <li className={tabActive == 'news' ? 'active' : ''}>
                        <a onClick={() => setTabActive('news')}>News</a>
                    </li>
                    <li><a>Bitcoin ETF</a></li>
                    <li><a>About</a></li>
                </ul>
                {tabActive == 'overview' &&  <CoinTradeOverview lang={lang} objLang={objLang} asset={asset} /> }
                {tabActive == 'insight' &&  <CoinTradeInsight lang={lang}  /> }
                {tabActive == 'news' &&  <CoinTradeNews lang={lang} blogs={blogs} /> }
                {tabActive == 'social_media' &&  <CoinTradeSocialMedia lang={lang} /> }
            </div>    
        </div>
    )
}

export default CoinTradeMainContainer
