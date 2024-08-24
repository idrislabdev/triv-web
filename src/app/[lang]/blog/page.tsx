import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'

import { dataMain, dataNews, dataSticky, dataCategories } from './samples'
import BlogNewsSection from '@/@core/pages/blog/news-section'
import BlogInvestasiNowSection from '@/@core/pages/blog/investasi-now-section'
import { getDictionariesBlog } from '@/app/dictionaries';
import BlogBaruCryptoSection from '@/@core/pages/blog/baru-crypto-section'

export default async function  Blog({ params }: any) {
    const {
        blog_section,
        baru_crypto_section,
        start_now_section,
    } = await getDictionariesBlog(params.lang);
    return (
    <>
        <MainHeader classText="header-white" lang={params.lang}/>
            <main className='blog-page sm:mobile-responsive light-theme'>
                <BlogNewsSection main={dataMain} news={dataNews} stickies={dataSticky} categories={dataCategories} objLang={blog_section} />
                <BlogBaruCryptoSection objLang={baru_crypto_section} />
                <BlogInvestasiNowSection objLang={start_now_section} />
            </main>
        <Footer />
    </>
  )
}

