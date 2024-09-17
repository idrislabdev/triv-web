import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import FaqsDetailSection from '@/@core/pages/faqs/detail-section'
import React from 'react'
import { getDictionariesFaqs } from '@/app/dictionaries'

import '@/styles/faqs.css'

export default async function FaqsTopicsDetail({ params }: any) {
    const {
        detail_faq,
    } = await getDictionariesFaqs(params.lang);
    return (
        <html>
            <head></head>
            <body>
                <MainHeader classText="header-white" lang={params.lang}/>
                <main className='faqs-page sm:mobile-responsive md:mobile-responsive light-theme'>
                    <FaqsDetailSection objLang={detail_faq} />
                </main>
                <Footer />
            </body>
        </html>
  )
}

