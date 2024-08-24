import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import FaqsSearchSection from '@/@core/pages/faqs/search-section'
import React from 'react'

import '@/styles/faqs.css'
import FaqsTopicSection from '@/@core/pages/faqs/topic-section'
import FaqPopularSection from '@/@core/pages/faqs/popular-section'
export default async function Faqs({ params }: any) {
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='faqs-page sm:mobile-responsive light-theme'>
                    <FaqsSearchSection objLang={null} />
                    <FaqsTopicSection objLang={null} />
                    <FaqPopularSection objLang={null} />
                </main>
            <Footer />
        </>
  )
}

