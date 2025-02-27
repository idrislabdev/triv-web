import Image from 'next/image'
import React from 'react'

const ProductsEwalletSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-ewallet-section'>
        <div className='ewallet-description'>
            <h2>{objLang.title}</h2>
            <h5>{objLang.subtitle}</h5>
            <div className='flex flex-col gap-[4px'>
              <p>{objLang.description_1}</p>
              <p>{objLang.description_2}</p>
            </div>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/woman-and-iphone.png' alt='woman and iphone' width={455} height={435} />
        </div>
    </section>
  )
}

export default ProductsEwalletSection
