import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from "react-fast-marquee";
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
            <div className='image-container'>
                <Image src='/images/devices/iphone-finance-cropped.png' className='fade-in entry-1' alt='iphone-finance' width={0} height={0} sizes='100%'/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2 className='fade-in entry-2'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3} <span>{objLang.title_4}</span></h2>
                    <p className='fade-in entry-3'>{objLang.subtitle}</p>
                </div>
                <div className='fade-in entry-3'>
                  {/* <Marquee autoFill={true} speed={100} loop={0} gradient={true}> */}
                  <Marquee speed={100} loop={0}>
                    <Image src='/images/logos/tesla.png' alt='tesla' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/amazon.png' alt='amazon' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/apple.png' alt='apple' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/nvidia.png' alt='nvidia' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/zoom.png' alt='zoom' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/walmart.png' alt='walmart' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/airbnb.png' alt='airbnb' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/unilever.png' alt='unilever' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/master-card.png' className='master-card' alt='master card' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/ibm.png' className='ibm' alt='ibm' width={0} height={0} sizes='100%' />
                    <Image src='/images/logos/mcd.png' className='mcd' alt='mc donald' width={0} height={0} sizes='100%' />
                  </Marquee>
                </div>
                <div className='start-button-logo fade-in entry-12'>
                    <Link href={`/${lang}/register`}>{objLang.button} <ArrowRightIcon color={'#fff'}/></Link>
                </div>
            </div>
        </section>
      )
}

export default StocksDividenSection
