import Image from 'next/image'
import React from 'react'

const HomeBannerSection = (props: {lang:any}) => {
  const { lang } = props
  return (
    <section className='home-banner-section'>
      <div className='home-banner-section-area'>
        <div className="section-text">
            <div className='text-title'>
              <h1>{lang.title}</h1>
              <p>{lang.description}</p>
            </div>
            <a>{lang.button_text}</a>
            <div className='section-terdaftar'>
                <label>{lang.sub_description}</label>
                <div className='terdaftar-list-logo'>
                    <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti.png' alt='bappebti logo' width={105} height={24} /></div>
                    <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo.png' alt='kominfo logo' width={85} height={26} /></div>
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
    </section>
  )
}

export default HomeBannerSection
