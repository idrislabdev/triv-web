import { IBlog } from '@/@core/@types/interfaces';
import CardNewsBlog from '@/@core/components/cards/card-news-blog';
import React from 'react'

const CoinTradeNews = (props: {lang:string, blogs:IBlog[]}) => {
    const { lang, blogs } = props

    return (
        <div className='blog-subcontainer'>
            {
                blogs.map((item:any, index:number) => (
                    <CardNewsBlog lang={lang} item={item} key={index}/>
                ))
            }
        </div>
    )
}

export default CoinTradeNews