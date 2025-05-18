import Image from 'next/image'
import React from 'react'

export const FuturesHeroSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='futures-hero-section'>
       <div className='futures-hero-section-area'>
          <div className="section-text">
            <div className='text-title'>
              <div className='title fade-in entry-1'>
                <h1>{objLang.title_1} <span>{objLang.title_2}</span>, {objLang.title_3}</h1>
              </div>
              <p className='fade-in entry-2'>#FuturesnyaTriv </p>
            </div>
            <a>{objLang.button}</a>
            <div className='terdaftar'>
              <h5>{objLang.registered}</h5>
              <div className='logo-area fade-in entry-4'>
                <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-big-white.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                <div className='cfx-logo'><Image src='/images/otoritas-keuangans/cfx.png' alt='cfx logo' width={0} height={0} sizes='100%' /></div>              
                <div className='kki-logo'><Image src='/images/otoritas-keuangans/kki.png' alt='kki logo' width={0} height={0} sizes='100%' /></div>              
              </div>
            </div>
          </div>
          <div className='section-image'>
            <Image src='/images/devices/iphone-futures.png' className='img-device fade-in entry-4' alt='iphone futures' width={0} height={0} sizes='100%' />
              <Image src='/images/others/bitcoin.png' className='img-bitcoin fade-in entry-5' alt='img bitcoin' width={0} height={0} sizes='100%' />
              <Image src='/images/others/etherium.png' className='img-etherium fade-in entry-6' alt='img etherium' width={0} height={0} sizes='100%' />
              <Image src='/images/others/litecoin.png' className='img-litecoin fade-in entry-7' alt='img litecoin' width={0} height={0} sizes='100%' />
              <Image src='/images/others/monero.png' className='img-monero fade-in entry-7' alt='img monero' width={0} height={0} sizes='100%' />
          </div>
        </div>
    </section>
  )
}
