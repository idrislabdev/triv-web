import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import FormService from '@/@core/components/forms/form-service'

const ProductsServiceHeaderNewSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-service-hero-section'>
            <div className='service-hero-container'>
                <div className='left-subcontainer'>
                    <div className='text-area'>
                        <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                        <p>{objLang.description}</p> 
                        <div className='button-group'>
                            <button className='btn-primary'>{objLang.button_1} <ArrowRightIcon color={'#fff'}/></button>
                            <button className='btn-outline-primary'>{objLang.button_2} <ArrowRightIcon color={'#fff'}/></button>
                        </div>
                    </div>
                    <div className='logo-area'>
                    <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-color-big.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                    <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo-color-big.png' alt='kominfo logo' width={0} height={0} sizes='100%' /></div>
                    <div className='bsi-logo'><Image src='/images/otoritas-keuangans/bsi-color-big.png' alt='bsi logo' width={0} height={0} sizes='100%' /></div>
                    <div className='cisa-logo'><Image src='/images/otoritas-keuangans/cisa-color-big.png' alt='cisa logo' width={0} height={0} sizes='100%' /></div>
                    </div>
                </div>
                <div className='right-subcontainer'>
                    <FormService />
                </div>
            </div>
        </section>
      )
}

export default ProductsServiceHeaderNewSection
