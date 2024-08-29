import React from 'react'
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'

import '@/styles/products.css'
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section'
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section'
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section'
import { getDictionariesProductsPulsa } from '@/app/dictionaries'
import ProductHeaderSection from '@/@core/pages/products/header-section'
import ProductsTopupPulsaSection from '@/@core/pages/products/topup-pulsa-section'
import ProductsAffliateSection from '@/@core/pages/products/affliate-section'
import ProductsServiceHeaderSection from '@/@core/pages/products/service-header-section'
import ProductsDeviceSection from '@/@core/pages/products/device-section'
import ProductsRegulasiSection from '@/@core/pages/products/regulasi-section'
import ProductsLayananSection from '@/@core/pages/products/layanan-section'

export default async function ServicePerfectMoney({ params }: any) {
    const {
        header_section,
        topup_section,
        ewallet_section,
        start_now_section,
    } = await getDictionariesProductsPulsa(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='products-page sm:mobile-responsive light-theme'>
                    <ProductsServiceHeaderSection objLang={null} />
                    <ProductsDeviceSection />
                    <ProductsRegulasiSection objLang={null} />
                    <ProductsLayananSection objLang={null} />
                    <ProductsAffliateSection objLang={null} />
                    <ProductsEwalletSection objLang={ewallet_section}/>
                    <ProductsInvestasiNowSection objLang={start_now_section} />
                    <ProductsTestimonyCarouselSection />
                </main>
            <Footer />
        </>
  )
}

