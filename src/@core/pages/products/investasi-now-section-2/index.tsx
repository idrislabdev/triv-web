import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const ProductsInvestasiNowSection2 = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-investasi-now-section'>
            <div className='image-container'>
                <Image src='/images/devices/imac.png' alt='imac' width={0} height={0} sizes='100%'/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='start-button-logo-product'>
                    <a>{objLang.button} <ArrowRightIcon color={'#fff'}/></a>
                    <div className='start-now-store'>
                        <Image src='/images/apps-store/playstore-logo.png' className='playstore-logo' alt='playstore logo' width={114.43} height={37.02}/>
                        <Image src='/images/apps-store/appstore-logo.png' className='apple-logo' alt='apple logo' width={130.64} height={38.71}/>
                    </div>
                </div>
            </div>
        </section>
      )
}

export default ProductsInvestasiNowSection2
