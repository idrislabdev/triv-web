import Image from 'next/image'
import React from 'react'

const HomeBannerSection = () => {
  return (
    <section className='home-banner-section'>
      <div className='home-banner-section-area'>
        <div className="section-text">
            <h1>Indonesian Digital Asset &amp; Cryptocurrency Marketplace</h1>
            <p>Since 2015, Triv is used by millions of people to invest and transact digital assets.
            Start with only Rp. 50,000. Triv is registered and supervised by Bappebti.</p>
            <a>Start Now</a>
            <div className='section-terdaftar'>
                <label>Terdaftar dan diawasi oleh</label>
                <div className='terdaftar-list-logo'>
                    <div className='terdaftar-logo'><Image src='/images/otoritas-keuangans/bappebti.png' alt='bappebti logo' width={105} height={24} /></div>
                    <div className='terdaftar-logo'><Image src='/images/otoritas-keuangans/kominfo.png' alt='kominfo logo' width={85} height={26} /></div>
                </div>
            </div>
        </div>
        <div className='section-device'>
            <div className='device-iphone'>
                <Image src='/images/devices/iphone-16.png' alt='iphone 16 devices' width={189} height={382} />
            </div>
            <div className='device-macbook'>
                <Image src='/images/devices/macbook.png' alt='macbook devices' width={556} height={342} />
            </div>
        </div>
      </div>
      {/* <div className='banner-section-ornament'>
        <Image src='/images/ornaments/banner-section-ornament.png' alt='banner section ornament' width={'800'} height={'665'} />
      </div> */}
    </section>
  )
}

export default HomeBannerSection
