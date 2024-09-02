import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeBannerSection = (props: {lang:string, objLang:any}) => {
  const { lang, objLang } = props
  return (
    <section className='home-banner-section'>
      <div className='home-banner-section-area'>
        <div className="section-text">
            <div className='text-title'>
              <h1>{objLang.title}</h1>
              <p>{objLang.description}</p>
            </div>
            <Link href={`/${lang}/register`}>{objLang.button_text} <ArrowRightIcon color={'#fff'} /></Link>
            <div className='section-terdaftar'>
                <label>{objLang.sub_description}</label>
                <div className='terdaftar-list-logo'>
                    <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                    <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo.png' alt='kominfo logo' width={0} height={0} sizes='100%'/></div>
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
