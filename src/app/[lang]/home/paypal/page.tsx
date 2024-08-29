import React from 'react'
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'

import '@/styles/products.css'
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section'
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section'
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section'

import ProductsAffliateSection from '@/@core/pages/products/affliate-section'
import ProductsServiceHeaderSection from '@/@core/pages/products/service-header-section'
import ProductsRegulasiDeviceSection from '@/@core/pages/products/regulasi-section'
import ProductsLayananSection from '@/@core/pages/products/layanan-section'
import ProductsAverageSection from '@/@core/pages/products/average-section'

import { getDictionariesPaypal } from '@/app/dictionaries'

export default async function ServicePaypal({ params }: any) {
    const {
        header_section,
        regulasi_section,
        ewallet_section,
        start_now_section,
        layanan_section,
        average_section,
        triv_affliate
    } = await getDictionariesPaypal(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='products-page sm:mobile-responsive light-theme'>
                    <ProductsServiceHeaderSection objLang={header_section} />
                    <ProductsRegulasiDeviceSection objLang={regulasi_section} />
                    <ProductsLayananSection objLang={layanan_section} />
                    <ProductsAverageSection objLang={average_section} />
                    <ProductsAffliateSection objLang={triv_affliate} />
                    <ProductsEwalletSection objLang={ewallet_section}/>
                    <ProductsInvestasiNowSection objLang={start_now_section} />
                    <ProductsTestimonyCarouselSection />
                </main>
            <Footer />
        </>
  )
}

