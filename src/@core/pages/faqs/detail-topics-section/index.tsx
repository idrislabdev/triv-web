"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'
import { faqQuestion, startedQuestion, tokenQuestion } from './data';
const FaqsDetailTopicSection = (props: {objLang:any}) => {
    const { objLang } = props
    const [selected, setSelected] = useState("1")
   

    return (
        <section className='faq-popular-section'>
            <h2>General</h2>
            <div className='question-list-container'>
                <div className="question-container">
                    <h5>FAQ</h5>
                    <div className="question-accordion">
                        <ul>
                            {
                                faqQuestion.map((item:{id:string,title:string,content:string}, index:number) => (
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
                <div className="question-container">
                    <h5>Token Saham AS</h5>
                    <div className="question-accordion">
                        <ul>
                            {
                                tokenQuestion.map((item:{id:string,title:string,content:string}, index:number) => (
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
                <div className="question-container">
                    <h5>Getting Started - Memulai Transaksi di Triv</h5>
                    <div className="question-accordion">
                        <ul>
                            {
                                startedQuestion.map((item:{id:string,title:string,content:string}, index:number) => (
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
           </div>
        </section>
  )
}

export default FaqsDetailTopicSection
