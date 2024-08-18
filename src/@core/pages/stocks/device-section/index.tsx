import Image from 'next/image'
import React from 'react'

const StocksDeviceSection = () => {
  return (
    <section className='stocks-device-section'>
      <div className='box-container'>
        <Image src='/images/devices/macbook-iphone.png' alt='macbook and iphone' width={682} height={480} />
      </div>
    </section>
  )
}

export default StocksDeviceSection
