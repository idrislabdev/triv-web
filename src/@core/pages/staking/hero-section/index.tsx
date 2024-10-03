import { ArrowRightIcon, CheckCircleGradientIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const StakingHeroSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='staking-hero-section'>
      <div className='staking-hero-section-area'>
        <div className="section-text">
          <div className='text-title'>
            <div className='title'>
              <h1>{objLang.title_1}</h1>
              <h2>{objLang.title_2}</h2>
            </div>
            <p>{objLang.description}</p>
          </div>
          <div className='text-info'>
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
        <Image src='/images/devices/phone-mockup.png' className='img-device' alt='iphone mockup' width={0} height={0} sizes='100%' />
        <Image src='/images/others/coin-1.png' className='img-coin-1' alt='img coin 1' width={0} height={0} sizes='100%' />
        <Image src='/images/others/coin-2.png' className='img-coin-2' alt='img coin 2' width={0} height={0} sizes='100%' />
        <Image src='/images/others/coin-3.png' className='img-coin-3' alt='img coin 2' width={0} height={0} sizes='100%' />
      </div>
    </section>
  )
}

export default StakingHeroSection
