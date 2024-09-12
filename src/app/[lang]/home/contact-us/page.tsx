import Footer from '@/@core/components/footer'
import MainHeader from '@/@core/components/main-header'
import ContactUsFaqSection from '@/@core/pages/contact-us/faq-section';
import ContactUsHeaderSection from '@/@core/pages/contact-us/header-section'
import ContactUsInfoSection from '@/@core/pages/contact-us/info-section';
import { getDictionariesContactUs } from '@/app/dictionaries';
import React from 'react'

export default async function  ContactUs({ params }: any) {
    const {
        header_section, 
        info_section,
        faq_section,
    } = await getDictionariesContactUs(params.lang);
    return (
        <>
            <MainHeader classText="header-white" lang={params.lang}/>
                <main className='contact-us-page sm:mobile-responsive md:mobile-responsive light-theme'>
                    <ContactUsHeaderSection objLang={header_section} />
                    <ContactUsInfoSection objLang={info_section} />
                    <ContactUsFaqSection objLang={faq_section} />
                </main>
            <Footer />
        </>
  )
}

