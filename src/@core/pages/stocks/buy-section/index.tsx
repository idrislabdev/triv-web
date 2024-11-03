import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const StocksBuySection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props

    return (
        <section className='stocks-buy-section'>
            <div className='description-container'>
                <div className='start-now-description'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span></h2>
                <p>{objLang.subtitle}</p>
                </div>
                <div className='start-button-logo'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                </div>
            </div>
            <div className='image-container'>
                <Image src='/images/others/woman-loan-happy.png' alt='woman loan happy' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/tesla.png' className='coin coin-tesla' alt='tesla' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/netflix.png' className='coin coin-netflix' alt='netflix' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/airbnb.png' className='coin coin-airbnb' alt='airbnb' width={0} height={0} sizes='100%'/>
            </div>
        </section>
      )
}

export default StocksBuySection
