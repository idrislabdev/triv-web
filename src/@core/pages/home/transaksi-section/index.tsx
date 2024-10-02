import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const HomeTransaksiSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
        <section className='home-transaksi-section'>
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
                <Image src='/images/devices/laptop-and-phone.png' alt='woman and iphone' width={0} height={0} sizes='100%'/>
            </div>
        </section>
      )
}

export default HomeTransaksiSection
