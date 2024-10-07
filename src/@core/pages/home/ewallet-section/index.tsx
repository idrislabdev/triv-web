import Image from 'next/image'
import React, { useEffect } from 'react'

const HomeEwalletSection = (props: {objLang:any}) => {
  const { objLang } = props
  const inViewport = () => {
    const elements = document.getElementsByClassName("home-ewallet-section");
    var element = elements[0];

    const { top, bottom } = element.getBoundingClientRect();

    if(window.innerHeight > top && bottom > 0) {
    document.getElementsByClassName("home-ewallet-section")[0].classList.add('animate')
    } else {
    document.getElementsByClassName("home-ewallet-section")[0].classList.remove('animate')
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", inViewport, { passive: true });
      document.getElementsByClassName("home-ewallet-section")[0].classList.add('animate')
  });
  return (
    <section className='home-ewallet-section'>
        <div className='ewallet-description'>
            <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
            <h5 className='fade-in entry-2'>{objLang.subtitle}</h5>
            <p className='fade-in entry-3'>
                {objLang.description}
            </p>
        </div>
        <div className='ewallet-image'>
            <Image src='/images/others/wallets.png' className='fade-in entry-4' alt='wallets' width={0} height={0} sizes='100%' />
        </div>
    </section>
  )
}

export default HomeEwalletSection
