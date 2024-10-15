import Image from 'next/image'
import React, { useEffect } from 'react'

const ProductsEwalletNewSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-ewallet-section'>
        <div className='ewallet-description'>
            <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
            <h5 className='fade-in entry-2'>{objLang.subtitle}</h5>
            <p className='fade-in entry-3'>
                {objLang.description}
            </p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/wallets.png' className='fade-in entry-4' alt='wallets' width={0} height={0} sizes='100%' />
        </div>
    </section>
  )
}

export default ProductsEwalletNewSection
