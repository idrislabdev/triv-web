"use client"

import Link from 'next/link';
import React from 'react'

const ContactUsFaqSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
        <section className='contact-us-faq-section'>
            <div className='header-faq-contact-us new'>
                <Link href={`/${lang}/home/faqs`}>Explore All FAQ</Link>
            </div>
        </section>
  )
}

export default ContactUsFaqSection
