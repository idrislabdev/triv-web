import Image from 'next/image'
import React from 'react'

const CardNewsMain = (props: {item:any}) => {
  const { item } = props
  return (
    <div className='card-news-main'>
      <Image src='/images/samples/sample-news.png' alt={item.title} width={0} height={0} sizes='100%'/>
      <div className='card-content'>
        <h5>{item.title}</h5>
        <p>{item.content}</p>
      </div>
    </div>
  )
}

export default CardNewsMain
