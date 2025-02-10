import { IBlog } from '@/@core/@types/interfaces'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardNewsBlogNew = (props: {lang:string, item:IBlog}) => {
  const { lang, item } = props
  return (
    <Link href={`/${lang}/blog/${item.link.replace("https://blog.triv.co.id/", "")}`} className='card-news-secondary-2'>
      <div className='card-content'>
        <h5>{item.title}</h5>
        <p>{item.description.replace(/(<([^>]+)>)/ig, '')}</p>
      </div>
      <Image src={item.image_url} alt={item.title} width={0} height={0} sizes='100%'/>
    </Link>
  )
}

export default CardNewsBlogNew
