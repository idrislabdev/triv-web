import React from 'react'

const EtfCard = (props: {title:string, subTitle: string, price:string, priceChange:string, volume:string, marketCap: string}) => {
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
            <p>{price}</p>
        </div>
        <div className='card-row'>
            <label>Price Change</label>
            <p className='text-minus'>{priceChange}</p>
        </div>
        <div className='card-row'>
            <label>Volume</label>
            <p>{volume}</p>
        </div>
        <div className='card-row'>
            <label>Market Cap</label>
            <p>{marketCap}</p>
        </div>
    </div>
  )
}

export default EtfCard