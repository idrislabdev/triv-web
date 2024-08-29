import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const ProductsServiceHeaderSection = (props: {objLang:any}) => {
    const { objLang } = props
    const pulsas = ['PDAM', 'TELPON']
    return (
        <section className='products-service-header-section'>
            <div className='service-header-container'>
                <div className='title-container'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.description}</p> 
                </div>
                <div className='button-group'>
                    <button>{objLang.button_1} <ArrowRightIcon color={'#fff'}/></button>
                    <button className='white'>{objLang.button_2} <ArrowRightIcon color={'#fff'}/></button>
                </div>
            </div>
        </section>
      )
}

export default ProductsServiceHeaderSection
