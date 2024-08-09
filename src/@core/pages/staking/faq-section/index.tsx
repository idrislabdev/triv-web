"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const StakingFaqSection = () => {
    const [selected, setSelected] = useState("1")
    const container1: any = useRef(null);
    const container2: any = useRef(null);
    const container3: any = useRef(null);

    return (
        <section className='staking-faq-section'>
            <h2>FAQ (Pertanyaan Terkait Crypto Staking)</h2>
            <div className="question-faq-staking">
                <div className="question-faq-accordion">
                    <ul>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "1" ? "1" : "")}>
                                <div className="header-button"> 
                                    <label> Apa Itu Crypto Staking? </label> 
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
                                        Crypto Staking adalah proses mengunci koin anda dalam blockchain proof of stake untuk mengamankan 
                                        jaringan koin tersebut agar mendapatkan bunga dividen. 
                                        Bunga tersebut merupakan bunga dari protokol blockchain terkait dan bukan dari Triv.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "2" ? "2" : "")}>
                                <div className="header-button"> 
                                    <label> Apa Keuntungan Staking Crypto? </label> 
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
                                        Crypto Staking adalah proses mengunci koin anda dalam blockchain proof of stake untuk mengamankan 
                                        jaringan koin tersebut agar mendapatkan bunga dividen. 
                                        Bunga tersebut merupakan bunga dari protokol blockchain terkait dan bukan dari Triv.
                                    </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "3" ? "3" : "")}>
                                <div className="header-button"> 
                                    <label> Apakah Staking Crypto aman? </label> 
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
                                        Crypto Staking adalah proses mengunci koin anda dalam blockchain proof of stake untuk mengamankan 
                                        jaringan koin tersebut agar mendapatkan bunga dividen. 
                                        Bunga tersebut merupakan bunga dari protokol blockchain terkait dan bukan dari Triv.
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='question-faq-image'>
                    <Image src='/images/others/3d-faq.png' alt='3d-faq' width={237} height={303}/>\
                </div>
            </div>
        </section>
  )
}

export default StakingFaqSection
