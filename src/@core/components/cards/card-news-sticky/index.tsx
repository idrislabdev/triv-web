import Image from 'next/image'
import React from 'react'

const CardNewsSticky = (props: {item:any}) => {
  const { item } = props
  return (
    <div className='card-news-sticky'>
      <div className='card-content'>
        <h5>{item.title}</h5>
      </div>
      <Image src='/images/samples/sample-news.png' alt={item.title} width={0} height={0} sizes='100%'/>
    </div>
  )
}

export default CardNewsSticky
