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
    <html lang={params.lang}>
         <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"/>
                <meta http-equiv='content-language' content='id-id' />
                <meta name="googlebot" content="index,follow" />
                <meta name="msnbot" content="index,follow" />
                <meta name="robots" content="index,follow" />
                <link rel="icon" href="https://blog.triv.co.id/wp-content/themes/triv/images/favicon.ico" />
                <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
                <title>TRIV Listing 4 Koin Baru yaitu Metacene, SUNDOG, Eurite dan Self Chain - Triv Blog</title>
                <meta name="description" content="Kali ini, TRIV memperkenalkan 4 koin terbaru yang wajib kamu kenal: MetaCene (MAK), SUNDOG, Eurite (EURI), dan Self Chain (SLF)." />
                <link rel="canonical" href="https://blog.triv.co.id/triv-listing-4-koin-baru-yaitu-metacene-sundog-eurite-dan-self-chain/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="article" />
                <meta property="og:title" content="TRIV Listing 4 Koin Baru yaitu Metacene, SUNDOG, Eurite dan Self Chain - Triv Blog" />
                <meta property="og:description" content="Kali ini, TRIV memperkenalkan 4 koin terbaru yang wajib kamu kenal: MetaCene (MAK), SUNDOG, Eurite (EURI), dan Self Chain (SLF)." />
                <meta property="og:url" content="https://blog.triv.co.id/triv-listing-4-koin-baru-yaitu-metacene-sundog-eurite-dan-self-chain/" />
                <meta property="og:site_name" content="Triv Blog" />
                <meta property="article:publisher" content="https://web.facebook.com/TrivIndonesia" />
                <meta property="article:published_time" content="2024-09-13T08:23:49+00:00" />
                <meta property="article:modified_time" content="2024-09-13T08:23:51+00:00" />
                <meta property="og:image" content="https://blog.triv.co.id/wp-content/uploads/2024/09/listing-sundog-blog.png" />
                <meta property="og:image:width" content="696" />
                <meta property="og:image:height" content="456" />
                <meta property="og:image:type" content="image/png" />
                <meta name="author" content="jeremy ." />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@TrivExchange" />
                <meta name="twitter:site" content="@TrivExchange" />
                <meta name="twitter:label1" content="Written by" />
                <meta name="twitter:data1" content="jeremy ." />
                <meta name="twitter:label2" content="Est. reading time" />
                <meta name="twitter:data2" content="2 minutes" />
        </head>
        <body>
            <MainHeader classText="header-white" lang={params.lang}/>
            <main className='blog-page sm:mobile-responsive md:mobile-responsive light-theme'>
                <BlogNewsDetailSection main={dataMain} news={dataNews} stickies={dataSticky} categories={dataCategories} objLang={blog_section} />
            </main>
            <Footer />
        </body>
    </html>
  )
}

