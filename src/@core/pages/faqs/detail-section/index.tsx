"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { faqQuestion, startedQuestion, tokenQuestion } from './data';
import { PrinterIcon } from '@/@core/components/custom-icons';
const FaqsDetailSection = (props: {objLang:any}) => {
    const { objLang } = props
    const [selected, setSelected] = useState("1")
   

    return (
        <section className='faq-detail-section'>
            <h2>General</h2>
            <div className='faq-detail-container'>
                <div className='header-subcontainer'>
                    <div className='label-subcontainer'>
                        <label>{objLang.created_by}: Triv</label>
                        <label>{objLang.modified_at} on : Fri, 17 Feb, 2024 at 12:02 PM</label>
                    </div>
                    <a>
                        <PrinterIcon color={'#fff'} />
                        <span>Print</span>
                    </a>
                </div>
                <hr />
                <div className='detail-subcontainer'>
                    <div className="question-accordion">
                        <ul>
                            <li>
                                <button type="button" onClick={_ => setSelected(selected !== "1" ? "1" : "")}>
                                    <div className="header-button"> 
                                        <label>Waktu jam operasional Triv?</label> 
                                        <svg className={`w-[14px] h-[14px] text-gray-500 ${selected === "1" ? 'transform rotate-180' : ''}`} 
                                            fill="none" strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            viewBox="0 0 24 24" 
                                            stroke="#000000"
                                        >
                                            <path d="M19 9l-7 7-7-7"></path>
                                        </svg>
                                    </div>
                                </button>
                                <div className={`accordion-content ${selected === "1" ? `max-h-[400px]` : 'max-h-0'}`}>
                                    <div className="content-area">
                                        <p>Pengguna diwajibkan MEMILIKI token saham pada tanggal pembagian dividen oleh perusahaan terkait dan telah menyimpan token saham tersebut minimal 3 hari.</p>
                                        <p>Sebagai contoh : Jika Dividen APPLE dibagikan pada tanggal 13 Januari 2023, maka posisi saldo dompet nasabah harus memiliki token saham APPLE dari tanggal 10 Januari 2023 hingga 13 januari 2023</p>
                                        <div className='quest-subcontainer'>
                                            <p><span>Q : Apakah saya tetap mendapatkan dividen jika saya membeli Token saham tersebut pada tanggal 12 januari?</span></p>
                                            <p>A : Tidak ! anda harus memegang token saham tersebut selama 3 hari sebelum tanggal pembagian dividen</p>
                                        </div>
                                        <div className='quest-subcontainer'>
                                            <p><span>Q : Jika saya membeli pada tanggal 13 januari , apakah saya tetap mendapatkan dividen?</span></p>
                                            <p>A : Tidak ! anda wajib memiliki saldo token saham minimal h-3 dari jadwal pembagian dividen</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='footer-subcontainer'>
                    <p>{objLang.author_text}</p>
                    <span>{objLang.helpful} <a>{objLang.yes}</a> <a>{objLang.no}</a></span>
                </div>
            </div>
        </section>
  )
}

export default FaqsDetailSection
