import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';
import FaqsSearchSection from '@/@core/pages/faqs/search-section';
import React from 'react';

import '@/styles/faqs.css';
import FaqsTopicSection from '@/@core/pages/faqs/topic-section';
import FaqsPopularSection from '@/@core/pages/faqs/popular-section';
export default async function Faqs({ params }: any) {
  return (
    <html>
      <head></head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="faqs-page sm:mobile-responsive md:mobile-responsive">
          <FaqsSearchSection objLang={null} />
          <FaqsTopicSection lang={params.lang} objLang={null} />
          <FaqsPopularSection objLang={null} />
        </main>
        <Footer />
      </body>
    </html>
  );
}
