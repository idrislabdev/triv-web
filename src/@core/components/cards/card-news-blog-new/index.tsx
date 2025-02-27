import { IBlog } from '@/@core/@types/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardNewsBlogNew = (props: {lang:string, item:any}) => {
  const { lang, item } = props
  return (
    <a href={`${item.link}`} className='card-news-secondary-2' target='_blank'>
      <div className='card-content'>
        <h5>{item.title}</h5>
        <p>{item.description}</p>
      </div>
      {item.source_icon != null && <Image src={item.source_icon} alt={item.title} width={0} height={0} sizes='100%' unoptimized={true} />}
      
    </a>
  )
}

export default CardNewsBlogNew
