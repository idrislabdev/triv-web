import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const StocksDividenSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props

    return (
        <section className='stocks-dividen-section'>
            <div className='image-container'>
                <Image src='/images/devices/iphone-finance-cropped.png' alt='iphone-finance' width={0} height={0} sizes='100%'/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span></h2>
                    <p>{objLang.subtitle}</p>
                </div>
                <div className='logo-list'>
                    <Image src='/images/logos/tesla.png' alt='tesla' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/amazon.png' alt='amazon' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/apple.png' alt='apple' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/nvidia.png' alt='nvidia' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/zoom.png' alt='zoom' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/walmart.png' alt='walmart' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/airbnb.png' alt='airbnb' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/unilever.png' alt='unilever' width={0} height={0} sizes='100%' />

                </div>
                <div className='start-button-logo'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                </div>
            </div>
        </section>
      )
}

export default StocksDividenSection
