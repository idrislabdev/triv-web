import Footer from '@/@core/components/footer';
import MainHeader from '@/@core/components/main-header';
import FaqsDetailTopicSection from '@/@core/pages/faqs/detail-topics-section';
import React from 'react';

import '@/styles/faqs.css';
export default async function FaqsTopics({ params }: any) {
  return (
    <html>
      <head></head>
      <body>
        <MainHeader classText="header-white" lang={params.lang} />
        <main className="faqs-page sm:mobile-responsive md:mobile-responsive">
          <FaqsDetailTopicSection objLang={null} />
        </main>
        <Footer />
      </body>
    </html>
  );
}
