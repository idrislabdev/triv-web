import React from 'react'
import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'

import '@/styles/products.css'
import ProductsEwalletSection from '@/@core/pages/products/ewallet-section'
import ProductsInvestasiNowSection from '@/@core/pages/products/investasi-now-section'
import ProductsTestimonyCarouselSection from '@/@core/pages/liverate/testimony-carousel-section'
import ProductHeaderSection from '@/@core/pages/products/header-section'
import ProductsAffliateSection from '@/@core/pages/products/affliate-section'
import ProductsTagihanSection from '@/@core/pages/products/tagihan-section'
import { getDictionariesProductsTagihan } from '@/app/dictionaries'

export default async function ProductsPulsa({ params }: any) {
    const {
        header_section,
        topup_section,
        ewallet_section,
        start_now_section,
    } = await getDictionariesProductsTagihan(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='products-page sm:mobile-responsive light-theme'>
                    <ProductHeaderSection objLang={header_section}/>
                    <ProductsTagihanSection objLang={topup_section} />
                    <ProductsAffliateSection objLang={null} />
                    <ProductsEwalletSection objLang={ewallet_section}/>
                    <ProductsInvestasiNowSection objLang={start_now_section} />
                    <ProductsTestimonyCarouselSection />
                </main>
            <Footer />
        </>
  )
}

