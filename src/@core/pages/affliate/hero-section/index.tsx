import { ArrowRightIcon } from '@/@core/components/custom-icons'
import React from 'react'

const AffliateHeroSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='affliate-hero-section'>
        <div className='hero-container'>
            <h1>{objLang.title_1} <span>{objLang.title_2}</span>, {objLang.title_3} <span>{objLang.title_4}</span></h1>
            <p>{objLang.description}</p>
            <a>{objLang.button} <ArrowRightIcon color={'#fff'} /></a>
        </div>
    </section>
  )
}

export default AffliateHeroSection
