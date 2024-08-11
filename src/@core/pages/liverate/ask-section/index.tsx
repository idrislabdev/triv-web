"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const LiverateAskSection = () => {
    const [selected, setSelected] = useState("1")
    const container1: any = useRef(null);
    const container2: any = useRef(null);
    const container3: any = useRef(null);

    return (
        <section className='liverate-ask-section'>
            <h2>What are cryptos?</h2>
            <div className='ask-answer-liverate'>
                <p>
                    Crypto is taken from the word cryptography. Cryptography is the science that deals with techniques for encoding (encrypting) and encrypting (decrypting) messages to protect information from unauthorized access or 
                    alteration during transmission. In a more general context, the term crypto is
                </p>
            </div>
            <div className="question-ask-liverate">
                <div className="question-ask-accordion">
                    <ul>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "1" ? "1" : "")}>
                                <div className="header-button"> 
                                    <label> Apa keuntungan investasi crypto? </label> 
                                    <svg className={`w-5 h-5 text-gray-500 ${selected === "1" ? 'transform rotate-180' : ''}`} 
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
                            <div className={`accordion-content ${selected === "1" ? `max-h-[400px]` : 'max-h-0'}`} ref={container1}>
                                <div className="content-area">
                                    <p>
                                        Investasi cryptocurrency memiliki potensi keuntungan yang signifikan. 
                                        Salah satu keuntungan utama adalah peluang pertumbuhan nilai aset yang cepat. 
                                        Beberapa cryptocurrency telah mengalami kenaikan nilai yang luar biasa dalam 
                                        beberapa tahun terakhir. Selain itu, akses pasar global investasi cryptocurrency terbuka 24/7, 
                                        memungkinkan fleksibilitas dalam perdagangan. Teknologi blockchain yang mendasari cryptocurrency 
                                        juga menawarkan transparansi dan keamanan tingkat tinggi. Dengan kemampuan untuk mendiversifikasi portofolio, 
                                        investasi cryptocurrency dapat menjadi tambahan yang berpotensi menguntungkan, meskipun tetap penting 
                                        untuk memahami risiko dan riset yang cermat.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "2" ? "2" : "")}>
                                <div className="header-button"> 
                                    <label> Bagaimana cara invest crypto untuk pemula? </label> 
                                    <svg className={`w-5 h-5 text-gray-500 ${selected === "2" ? 'transform rotate-180' : ''}`} 
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
                            <div className={`accordion-content ${selected === "2" ? `max-h-[400px]` : 'max-h-0'}`} ref={container2}>
                                <div className="content-area">
                                    <p>
                                        Investasi cryptocurrency memiliki potensi keuntungan yang signifikan. 
                                        Salah satu keuntungan utama adalah peluang pertumbuhan nilai aset yang cepat. 
                                        Beberapa cryptocurrency telah mengalami kenaikan nilai yang luar biasa dalam 
                                        beberapa tahun terakhir. Selain itu, akses pasar global investasi cryptocurrency terbuka 24/7, 
                                        memungkinkan fleksibilitas dalam perdagangan. Teknologi blockchain yang mendasari cryptocurrency 
                                        juga menawarkan transparansi dan keamanan tingkat tinggi. Dengan kemampuan untuk mendiversifikasi portofolio, 
                                        investasi cryptocurrency dapat menjadi tambahan yang berpotensi menguntungkan, meskipun tetap penting 
                                        untuk memahami risiko dan riset yang cermat.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "3" ? "3" : "")}>
                                <div className="header-button"> 
                                    <label> Apakah investasi crypto aman? </label> 
                                    <svg className={`w-5 h-5 text-gray-500 ${selected === "3" ? 'transform rotate-180' : ''}`} 
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
                            <div className={`accordion-content ${selected === "3" ? `max-h-[400px]` : 'max-h-0'}`} ref={container2}>
                                <div className="content-area">
                                    <p>
                                        Investasi cryptocurrency memiliki potensi keuntungan yang signifikan. 
                                        Salah satu keuntungan utama adalah peluang pertumbuhan nilai aset yang cepat. 
                                        Beberapa cryptocurrency telah mengalami kenaikan nilai yang luar biasa dalam 
                                        beberapa tahun terakhir. Selain itu, akses pasar global investasi cryptocurrency terbuka 24/7, 
                                        memungkinkan fleksibilitas dalam perdagangan. Teknologi blockchain yang mendasari cryptocurrency 
                                        juga menawarkan transparansi dan keamanan tingkat tinggi. Dengan kemampuan untuk mendiversifikasi portofolio, 
                                        investasi cryptocurrency dapat menjadi tambahan yang berpotensi menguntungkan, meskipun tetap penting 
                                        untuk memahami risiko dan riset yang cermat.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='question-ask-image'>
                    <Image src='/images/others/3d-faq.png' alt='3d-faq' width={197} height={252}/>
                </div>
            </div>
        </section>
  )
}

export default LiverateAskSection
