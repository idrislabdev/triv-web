import { ArrowRightIcon, CheckCircleGradientIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const HomeHeroSection = (props: {lang:string, objLang:any}) => {
  const { lang, objLang } = props

  const inViewport = () => {
    const elements = document.getElementsByClassName("home-hero-section");
    var element = elements[0];
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if(window.innerHeight > top && bottom > 0) {
        document.getElementsByClassName("home-hero-section")[0].classList.add('animate')
      } else {
        document.getElementsByClassName("home-hero-section")[0].classList.remove('animate')
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", inViewport, { passive: true });
    document.getElementsByClassName("home-hero-section")[0].classList.add('animate')
  });

  return (
    <section className='home-hero-section'>
      <div className='home-hero-section-area'>
        <div className="section-text">
            <div className='text-title'>
              <div className='title fade-in entry-1'>
                <h1>{objLang.title_1} <br /><span>{objLang.title_2}</span></h1>
              </div>
              <ul className='fade-in entry-2'>
                <li><CheckCircleGradientIcon />{objLang.list_1}</li>
                <li><CheckCircleGradientIcon />{objLang.list_2}</li>
                <li><CheckCircleGradientIcon />{objLang.list_3}</li>
              </ul>
              <p className='fade-in entry-3'>{objLang.description}</p>
            </div>
            <Link href={`/${lang}/register`} className='fade-in entry-4'>{objLang.button_text} <ArrowRightIcon color={'#fff'} /></Link>
            <div className='section-terdaftar fade-in entry-5'>
                <label>{objLang.sub_description}</label>
                <div className='terdaftar-list-logo'>
                    {/* <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-color.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                    <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo-color.png' alt='kominfo logo' width={0} height={0} sizes='100%'/></div> */}
                    <div className='bappebti-logo'></div>
                    <div className='kominfo-logo'></div>
                    <div className='bsi-logo'></div>
                    <div className='cisa-logo'></div>
                </div>
            </div>
        </div>
        <div className='section-device'>
          <Image src='/images/devices/phone-double-2.png' className='fade-in entry-6' alt='iphone double' width={0} height={0} sizes='100%' />
        </div>
      </div>
    </section>
  )
}

export default HomeHeroSection
