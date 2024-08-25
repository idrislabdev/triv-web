"use client"

import SwiperBackground from '@/@core/components/swipers/swiper-background'
import Image from 'next/image'
import React from 'react'

const AffliateHolidaySection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='affliate-holiday-section'>
            <div className='holiday-container'>
                <div className='header-subcontainer'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.desc_1}</p>
                    <p><span>{objLang.desc_2}</span></p>
                </div>
                <div className='divide-subcontainer'>
                </div>
                <div className='swiper-subcontainer'>
                    <SwiperBackground />
                </div>
            </div>
        </section>
  )
}

export default AffliateHolidaySection
