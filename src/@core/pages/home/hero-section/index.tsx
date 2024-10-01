import { ArrowRightIcon, CheckCircleGradientIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeHeroSection = (props: {lang:string, objLang:any}) => {
  const { lang, objLang } = props
  return (
    <section className='home-hero-section'>
      <div className='home-hero-section-area'>
        <div className="section-text">
            <div className='text-title'>
              <div className='title'>
                <h1>{objLang.title_1}</h1>
                <h2>{objLang.title_2}</h2>
              </div>
              <ul>
                <li><CheckCircleGradientIcon />24/7 Instant</li>
                <li><CheckCircleGradientIcon />Spread Rendah</li>
                <li><CheckCircleGradientIcon />No Downtime</li>
              </ul>
              <p>{objLang.description}</p>
            </div>
            <Link href={`/${lang}/register`}>{objLang.button_text} <ArrowRightIcon color={'#fff'} /></Link>
            <div className='section-terdaftar'>
                <label>{objLang.sub_description}</label>
                <div className='terdaftar-list-logo'>
                    <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-color.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                    <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo-color.png' alt='kominfo logo' width={0} height={0} sizes='100%'/></div>
                </div>
            </div>
        </div>
        <div className='section-device'>
          <Image src='/images/devices/phone-double.png' alt='iphone double' width={0} height={0} sizes='100%' />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
