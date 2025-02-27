import { nFormatter2 } from '@/@core/utils/general'
import React from 'react'

const EtfCardNew = (props: {title:string, subTitle: string, price:string, priceChange:string, volume:string, marketCap: string}) => {
    const { title, subTitle, price, priceChange, volume, marketCap } = props
  return (
    <div className='card'>
        <div className='card-row header'>
            <label>{title}</label>
            <p>{subTitle}</p>
        </div>
        <hr />
        <div className='card-row'>
            <label>Price</label>
            <p>${nFormatter2(parseFloat(price), 1)}</p>
        </div>
        <div className='card-row'>
            <label>Price Change</label>
            <p className={`${parseFloat(priceChange) < 0 ? 'text-minus' : 'text-plus'}`}>{priceChange}%</p>
        </div>
        <div className='card-row'>
            <label>Volume</label>
            <p>${nFormatter2(parseFloat(volume), 1)}</p>
        </div>
        <div className='card-row'>
            <label>Market Cap</label>
            <p>${nFormatter2(parseFloat(marketCap), 1)}</p>
        </div>
    </div>
  )
}

export default EtfCardNew