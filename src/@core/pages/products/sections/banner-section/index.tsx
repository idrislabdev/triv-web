import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsBannerSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-banner-section'>
            <div className='main-container'>
                <div className='sub-container'>
                    <div className='image-area'>
                        <Image src='/images/others/beatiful-woman-with-phone.png' alt='fee icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='text-area'>
                        <div className='text-header'>
                            <h2>{objLang.title}</h2>
                            <p>{objLang.description}</p>
                        </div>
                        <div className='button-area'>
                            <a>{objLang.button} <ArrowRightIcon color={'#fff'}/></a>
                            <div className='app-store-list'>
                                <Image src='/images/apps-store/playstore-logo-new.png' className='playstore-logo' alt='playstore logo' width={0} height={0} sizes='100%'/>
                                <Image src='/images/apps-store/appstore-logo-new.png' className='apple-logo' alt='apple logo' width={0} height={0} sizes='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductsBannerSection
