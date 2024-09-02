import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeDividenStakingSection = (props: {lang:string, objLang:any }) => {
  const { lang, objLang } = props
  return (
    <section className='home-dividen-staking-section'>
      <div className='dividen-staking-device'>
        <Image src='/images/devices/iphone-with-description.png' alt='iphone with description' width={505} height={386} />
      </div>
      <div className='dividen-staking-description'>
        <div className='staking-description-title'>
            <h2>{objLang.title}</h2>
            <p>{objLang.description}</p>
        </div>
        <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
        </div>
    </section>
  )
}

export default HomeDividenStakingSection
