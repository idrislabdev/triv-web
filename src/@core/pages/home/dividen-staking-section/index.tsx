import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const HomeDividenStakingSection = (props: {lang:string, objLang:any }) => {
  const { lang, objLang } = props
  const inViewport = () => {
    const elements = document.getElementsByClassName("home-dividen-staking-section");
    var element = elements[0];

    const { top, bottom } = element.getBoundingClientRect();

    if(window.innerHeight > top && bottom > 0) {
    document.getElementsByClassName("home-dividen-staking-section")[0].classList.add('animate')
    } else {
    document.getElementsByClassName("home-dividen-staking-section")[0].classList.remove('animate')
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", inViewport, { passive: true });
      document.getElementsByClassName("home-dividen-staking-section")[0].classList.add('animate')
  });
  
  return (
    <section className='home-dividen-staking-section'>
      <div className='dividen-staking-device'>
        <Image src='/images/devices/iphone-with-description-background.png' className='fade-in entry-1' alt='iphone with description' width={0} height={0} sizes='100%' />
      </div>
      <div className='dividen-staking-description'>
        <div className='staking-description-title'>
            <h2 className='fade-in entry-2'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
            <p className='fade-in entry-3'>{objLang.description}</p>
        </div>
        <Link href={`/${lang}/register`} className='fade-in entry-4'>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
        </div>
    </section>
  )
}

export default HomeDividenStakingSection
