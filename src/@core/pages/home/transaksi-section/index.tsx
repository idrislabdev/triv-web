import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const HomeTransaksiSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("home-transaksi-section");
        var element = elements[0];

        const { top, bottom } = element.getBoundingClientRect();

        if(window.innerHeight > top && bottom > 0) {
        document.getElementsByClassName("home-transaksi-section")[0].classList.add('animate')
        } else {
        document.getElementsByClassName("home-transaksi-section")[0].classList.remove('animate')
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("home-transaksi-section")[0].classList.add('animate')
    });
    return (
        <section className='home-transaksi-section'>
            <div className='description-container'>
                <div className='start-now-description'>
                <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span></h2>
                <p className='fade-in entry-2'>{objLang.subtitle}</p>
                </div>
                <div className='start-button-logo fade-in entry-3'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                </div>
            </div>
            <div className='image-container'>
                <Image src='/images/devices/laptop-and-phone.png' className='fade-in entry-4' alt='laptop and iphone' width={0} height={0} sizes='100%'/>
            </div>
        </section>
      )
}

export default HomeTransaksiSection
