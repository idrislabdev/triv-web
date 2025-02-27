import { IBlog } from '@/@core/@types/interfaces';
import CardNewsBlogNew from '@/@core/components/cards/card-news-blog-new';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'

const CoinTradeNews = (props: {lang:string, blogs:IBlog[]}) => {
    const { lang, blogs } = props
    const [ newsData, setNewsData ] = useState([])
    const fetchData = useCallback(async () => {
        const resp = await axios.get(`https://ins.triv.id/api/v1/asset-insights?currency=BTC&session=news`)
        const { news } = resp.data.news
        // console.log(news)
        setNewsData(news)
    },[])

    useEffect(() => {
        fetchData();
    }, [fetchData])

    return (
        <div className='blog-subcontainer'>
            {
                newsData.map((item:any, index:number) => (
                    <CardNewsBlogNew lang={lang} item={item} key={index}/>
                ))
            }
        </div>
    )
}

export default CoinTradeNews