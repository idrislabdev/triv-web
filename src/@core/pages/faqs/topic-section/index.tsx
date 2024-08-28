"use client"
import React, { useState } from 'react'
import Link from 'next/link';

const FaqsTopicSection = (props: {lang:string, objLang:any }) => {
    const [selected, setSelected] = useState(0)
    const { lang, objLang } = props
    const topics = [
        'General', 
        'Triv Point', 
        'Triv Staking-Tambahan Penghasilan di Triv!', 
        'Triv Gift Card', 
        'Kirim dengan uang Triv', 
        'Triv Market', 
        'Affliasi Triv', 
        'CryptoCurrency dan Virtual Currency'
    ]
    return (
        <section className='faqs-topic-section'>
            <div className='topic-container'>
                <h2>Cari berdasarkan topik</h2>
                <div className='topic-subcontainer'>
                    {
                        topics.map((item:string, index:number) => (
                            <Link key={index} href={`/${lang}/home/faqs/${item.replace(' ', '-').toLocaleLowerCase()}`} className={`${selected - 1 == index ? 'active' : ''}`}>{item}</Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FaqsTopicSection
