"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { questions } from './data';
const FaqsPopularSection = (props: {objLang:any}) => {
    const { objLang } = props
    const [selected, setSelected] = useState("1")
   

    return (
        <section className='faq-popular-section'>
            <h2>Pertanyaan Populer</h2>
            <div className="popoular-container">
                <div className="question-accordion">
                    <ul>
                        {
                            questions.map((item:{id:string,title:string,content:string}, index:number) => (
                                <li key={index}>
                                    <button type="button" onClick={_ => setSelected(selected !== item.id ? item.id : "")}>
                                        <div className="header-button"> 
                                            <label>{item.title} </label> 
                                            <svg className={`w-[14px] h-[14px] text-gray-500 ${selected === item.id ? 'transform rotate-180' : ''}`} 
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
                                    <div className={`accordion-content ${selected === item.id ? `max-h-[400px]` : 'max-h-0'}`}>
                                        <div className="content-area">
                                            <p>{item.content}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default FaqsPopularSection
