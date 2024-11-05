import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const StocksDividenSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("stocks-dividen-section");
        var element = elements[0];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if(window.innerHeight > top && bottom > 0) {
            document.getElementsByClassName("stocks-dividen-section")[0].classList.add('animate')
          } else {
            document.getElementsByClassName("stocks-dividen-section")[0].classList.remove('animate')
          }
        }
      }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("stocks-dividen-section")[0].classList.add('animate')
    });
    return (
        <section className='stocks-dividen-section'>
            <div className='image-container fade-in entry-1'>
                <Image src='/images/devices/iphone-finance-cropped.png' alt='iphone-finance' width={0} height={0} sizes='100%'/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2 className='fade-in entry-2'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span></h2>
                    <p className='fade-in entry-3'>{objLang.subtitle}</p>
                </div>
                <div className='logo-list'>
                    <Image src='/images/logos/tesla.png' className="fade-in entry-4" alt='tesla' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/amazon.png' className="fade-in entry-5" alt='amazon' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/apple.png' className="fade-in entry-6" alt='apple' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/nvidia.png' className="fade-in entry-7" alt='nvidia' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/zoom.png' className="fade-in entry-8" alt='zoom' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/walmart.png' className="fade-in entry-9" alt='walmart' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/airbnb.png' className="fade-in entry-10" alt='airbnb' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/unilever.png' className="fade-in entry-11" alt='unilever' width={0} height={0} sizes='100%' />

                </div>
                <div className='start-button-logo fade-in entry-12'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                </div>
            </div>
        </section>
      )
}

export default StocksDividenSection
