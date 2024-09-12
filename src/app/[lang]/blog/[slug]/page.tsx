import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import React from 'react'

import { dataMain, dataNews, dataSticky, dataCategories } from '../samples'
import { getDictionariesBlog } from '@/app/dictionaries';
import BlogNewsDetailSection from '@/@core/pages/blog/news-detail-section'
import '@/styles/blog.css'

export default async function  BlogSlug({ params }: any) {
    const {
        blog_section,
        baru_crypto_section,
        start_now_section,
    } = await getDictionariesBlog(params.lang);
    return (
    <>
        <MainHeader classText="header-white" lang={params.lang}/>
            <main className='blog-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <BlogNewsDetailSection main={dataMain} news={dataNews} stickies={dataSticky} categories={dataCategories} objLang={blog_section} />
            </main>
        <Footer />
    </>
  )
}

