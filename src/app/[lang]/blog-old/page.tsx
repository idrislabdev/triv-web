import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';
import React from 'react';

import { dataMain, dataNews, dataSticky, dataCategories } from './samples';
import BlogNewsSection from '@/@core/pages/blog/news-section';
import BlogInvestasiNowSection from '@/@core/pages/blog/investasi-now-section';
import { getDictionariesBlog } from '@/app/dictionaries';
import BlogBaruCryptoSection from '@/@core/pages/blog/baru-crypto-section';
import '@/styles/blog.css';

export default async function Blog({ params }: any) {
  const { blog_section, baru_crypto_section, start_now_section } =
    await getDictionariesBlog(params.lang);
  return (
    <html lang={params.lang}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
        <meta httpEquiv="content-language" content="id-id" />
        <meta name="googlebot" content="index,follow" />
        <meta name="msnbot" content="index,follow" />
        <meta name="robots" content="index,follow" />
        <link
          rel="icon"
          href="https://blog.triv.co.id/wp-content/themes/triv/images/favicon.ico"
        />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />

        <title>Berita Kripto Terupdate Hari Ini - Triv Blog</title>
        <meta
          name="description"
          content="Dapatkan kabar terbaru mengenai perkembangan cryptocurrency di Triv Blog. Informasi berita kripto (Crypto News) hari ini paling update."
        />
        <link rel="canonical" href="https://blog.triv.co.id/" />
        <link rel="next" href="https://blog.triv.co.id/page/2/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Triv Blog" />
        <meta
          property="og:description"
          content="Dapatkan kabar terbaru mengenai perkembangan cryptocurrency di Triv Blog. Informasi berita kripto (Crypto News) hari ini paling update."
        />
        <meta property="og:url" content="https://blog.triv.co.id/" />
        <meta property="og:site_name" content="Triv Blog" />
        <meta
          property="og:image"
          content="https://blog.triv.co.id/wp-content/uploads/2023/08/logo-full.png"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@TrivExchange" />
        <meta
          name="google-site-verification"
          content="googlea4f0aee7ccf7b3db"
        />
      </head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="blog-page sm:mobile-responsive md:mobile-responsive">
          <BlogNewsSection
            lang={params.lang}
            main={dataMain}
            news={dataNews}
            stickies={dataSticky}
            categories={dataCategories}
            objLang={blog_section}
          />
          <BlogBaruCryptoSection objLang={baru_crypto_section} />
          <BlogInvestasiNowSection objLang={start_now_section} />
        </main>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
