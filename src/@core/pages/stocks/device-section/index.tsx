import Image from 'next/image'
import React from 'react'

const StocksDeviceSection = () => {
  return (
    <section className='stocks-device-section'>
      <div className='box-container'>
        <Image src='/images/devices/macbook-iphone-socialmedia.png' alt='macbook and iphone' width={0} height={0} sizes='100%' />
      </div>
    </section>
  )
}

export default StocksDeviceSection
