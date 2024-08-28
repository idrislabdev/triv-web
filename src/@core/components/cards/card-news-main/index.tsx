import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardNewsMain = (props: {lang:string, item:any}) => {
  const { lang, item } = props
  return (
    <Link href={`/${lang}/blog/title-slug`} className='card-news-main'>
      <Image src='/images/samples/sample-news.png' alt={item.title} width={0} height={0} sizes='100%'/>
      <div className='card-content'>
        <h5>{item.title}</h5>
        <p>{item.content}</p>
      </div>
    </Link>
  )
}

export default CardNewsMain
