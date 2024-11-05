import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const StocksBuySection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("stocks-buy-section");
        var element = elements[0];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if(window.innerHeight > top && bottom > 0) {
            document.getElementsByClassName("stocks-buy-section")[0].classList.add('animate')
          } else {
            document.getElementsByClassName("stocks-buy-section")[0].classList.remove('animate')
          }
        }
      }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("stocks-buy-section")[0].classList.add('animate')
    });
    return (
        <section className='stocks-buy-section'>
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
                <Image src='/images/others/woman-loan-happy.png' className='fade-in entry-4' alt='woman loan happy' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/tesla.png' className='coin coin-tesla fade-in entry-5' alt='tesla' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/netflix.png' className='coin coin-netflix fade-in entry-6' alt='netflix' width={0} height={0} sizes='100%'/>
                <Image src='/images/others/airbnb.png' className='coin coin-airbnb fade-in entry-7' alt='airbnb' width={0} height={0} sizes='100%'/>
            </div>
        </section>
      )
}

export default StocksBuySection
