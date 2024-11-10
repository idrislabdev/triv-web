import React, { useEffect } from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import FormService from '@/@core/components/forms/form-service'

const ProductsServiceHeaderNewSection = (props: {objLang:any, objProduct:any}) => {
    const { objLang, objProduct } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("products-service-hero-section");
        var element = elements[0];
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if(window.innerHeight > top && bottom > 0) {
            document.getElementsByClassName("products-service-hero-section")[0].classList.add('animate')
          } else {
            document.getElementsByClassName("products-service-hero-section")[0].classList.remove('animate')
          }
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("products-service-hero-section")[0].classList.add('animate')
    });

    return (
        <section className='products-service-hero-section'>
            <div className='service-hero-container'>
                <div className='left-subcontainer'>
                    <div className='text-area'>
                        <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                        <p className='fade-in entry-2'>{objLang.description}</p> 
                    </div>
                    <div className='button-group fade-in entry-3'>
                        <button className='btn-primary'>{objLang.button_1} <ArrowRightIcon color={'#fff'}/></button>
                        <button className='btn-outline-primary'>{objLang.button_2} <ArrowRightIcon color={'#fff'}/></button>
                    </div>
                    <div className='logo-area fade-in entry-4'>
                        <div className='bappebti-logo'><Image src='/images/otoritas-keuangans/bappebti-color-big.png' alt='bappebti logo' width={0} height={0} sizes='100%' /></div>
                        <div className='kominfo-logo'><Image src='/images/otoritas-keuangans/kominfo-color-big.png' alt='kominfo logo' width={0} height={0} sizes='100%' /></div>
                        <div className='bsi-logo'><Image src='/images/otoritas-keuangans/bsi-color-big.png' alt='bsi logo' width={0} height={0} sizes='100%' /></div>
                        <div className='cisa-logo'><Image src='/images/otoritas-keuangans/cisa-color-big.png' alt='cisa logo' width={0} height={0} sizes='100%' /></div>
                    </div>
                </div>
                <div className='right-subcontainer fade-in entry-5'>
                    <FormService objProduct={objProduct}/>
                </div>
            </div>
        </section>
      )
}

export default ProductsServiceHeaderNewSection
