import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const ProductHeaderSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-header-section'>
            <div className='title-container'>
                <h2>{objLang.title}</h2>
                <p>{objLang.description}</p>
            </div>
            <div className='image-container'>
                <Image src='/images/devices/imac-product.png' alt='imac' width={0} height={0} sizes='100%'/>
            </div>
        </section>
      )
}

export default ProductHeaderSection
