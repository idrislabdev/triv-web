import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const BlogInvestasiNowSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='blog-investasi-now-section'>
            <div className='image-container'>
                <Image src='/images/devices/imac.png' alt='imac' width={392} height={355}/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='start-button-logo'>
                    <a>{objLang.button} <ArrowRightIcon color={'#fff'}/></a>
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

export default BlogInvestasiNowSection
