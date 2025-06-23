import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Link from 'next/link'

const LiverateInvestasiNowSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
        <section className='liverate-investasi-now-section'>
            <div className='image-container'>
                <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='start-button-logo'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                    <div className='start-now-store sm:!hidden'>
                        <div className='apple-logo'></div>
                        <div className='playstore-logo'></div>
                    </div>
                    <div className='start-now-store-mobile sm:!flex'>
                        <div className='apple-logo'></div>
                        <div className='playstore-logo'></div>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default LiverateInvestasiNowSection
