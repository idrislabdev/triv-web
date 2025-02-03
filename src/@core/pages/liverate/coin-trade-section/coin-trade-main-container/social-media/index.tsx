import { IBlog } from '@/@core/@types/interfaces';
import CardNewsBlog from '@/@core/components/cards/card-news-blog';
import { ChevronUpIcon } from '@/@core/components/custom-icons';
import Image from 'next/image';
import React from 'react'
import SocialMediaMetric from './social-metrics';
import SentimenAnalysis from './sentiment-anlysis';
import PricePerformance from './price-performance';

const CoinTradeSocialMedia = (props: {lang:string}) => {
    const { lang } = props

    return (
        <div className='social-media-area'>
            <div className='row-1'>
                <SocialMediaMetric />
                <SentimenAnalysis />
            </div>
            <div className='row-2'>
                <PricePerformance />
            </div>
        </div>
    )
}

export default CoinTradeSocialMedia