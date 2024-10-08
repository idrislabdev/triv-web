import { ArrowRightIcon, CheckCircleGradientIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const StakingHeroSection = (props: {objLang:any}) => {
  const { objLang } = props

  const inViewport = () => {
    const elements = document.getElementsByClassName("staking-hero-section");
    var element = elements[0];
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if(window.innerHeight > top && bottom > 0) {
        document.getElementsByClassName("staking-hero-section")[0].classList.add('animate')
      } else {
        document.getElementsByClassName("staking-hero-section")[0].classList.remove('animate')
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", inViewport, { passive: true });
    document.getElementsByClassName("staking-hero-section")[0].classList.add('animate')
  });

  return (
    <section className='staking-hero-section'>
      <div className='staking-hero-section-area'>
        <div className="section-text">
          <div className='text-title'>
            <div className='title fade-in entry-1'>
              <h1>{objLang.title_1} <br /> <span>{objLang.title_2}</span></h1>
            </div>
            <p className='fade-in entry-2'>{objLang.description}</p>
          </div>
          <div className='text-info fade-in entry-3'>
            <div className='text-detail-info'>
              <label>IDR 256M</label>
              <span>ASSETS STAKED</span>
            </div>
            <div className='text-detail-info'>
              <label>100K+</label>
              <span>USERS</span>
            </div>
            <div className='text-detail-info'>
              <label>IDR 25M+</label>
              <span>REWARDS PAID</span>
            </div>
          </div>
        </div>
        <div className='section-image'>
          <Image src='/images/devices/phone-mockup.png' className='img-device fade-in entry-4' alt='iphone mockup' width={0} height={0} sizes='100%' />
          <Image src='/images/others/coin-1.png' className='img-coin-1 fade-in entry-5' alt='img coin 1' width={0} height={0} sizes='100%' />
          <Image src='/images/others/coin-2.png' className='img-coin-2 fade-in entry-6' alt='img coin 2' width={0} height={0} sizes='100%' />
          <Image src='/images/others/coin-3.png' className='img-coin-3 fade-in entry-7' alt='img coin 2' width={0} height={0} sizes='100%' />
        </div>
      </div>
    </section>
  )
}

export default StakingHeroSection
