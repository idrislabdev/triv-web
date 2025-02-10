import { IBlog } from '@/@core/@types/interfaces';
import CardNewsBlogNew from '@/@core/components/cards/card-news-blog-new';
import React from 'react'

const CoinTradeNews = (props: {lang:string, blogs:IBlog[]}) => {
    const { lang, blogs } = props

    return (
        <div className='blog-subcontainer'>
            {
                blogs.map((item:any, index:number) => (
                    <CardNewsBlogNew lang={lang} item={item} key={index}/>
                ))
            }
        </div>
    )
}

export default CoinTradeNews