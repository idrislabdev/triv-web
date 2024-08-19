import Image from 'next/image'
import React from 'react'

const StocksEwalletSection = (props: {langObj:any}) => {
  const { langObj } = props
  return (
    <section className='stocks-ewallet-section'>
        <div className='ewallet-description'>
            <h2>{langObj.title}</h2>
            <h5>{langObj.subtitle}</h5>
            <p>{langObj.description}</p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/woman-and-iphone.png' alt='woman and iphone' width={455} height={435} />
        </div>
    </section>
  )
}

export default StocksEwalletSection