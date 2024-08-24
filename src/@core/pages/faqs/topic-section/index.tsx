"use client"
import React, { useState } from 'react'

const FaqsTopicSection = (props: { objLang:any }) => {
    const [selected, setSelected] = useState(0)
    const { objLang } = props
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
                            <a key={index} onClick={_ => setSelected(index+1)} className={`${selected - 1 == index ? 'active' : ''}`}>{item}</a>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default FaqsTopicSection
