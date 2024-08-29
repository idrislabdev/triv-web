import Image from 'next/image'
import React from 'react'

const ProductsDeviceSection = () => {
  return (
    <section className='products-device-section'>
      <div className='box-container'>
        <Image src='/images/devices/macbook-iphone.png' alt='macbook and iphone' width={0} height={0} sizes='100%'/>
      </div>
    </section>
  )
}

export default ProductsDeviceSection
