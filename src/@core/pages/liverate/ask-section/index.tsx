"use client"

import Image from 'next/image';
import React, { useRef, useState } from 'react'

const LiverateAskSection = (props: {objLang:any}) => {
    const { objLang } = props
    const [selected, setSelected] = useState("1")
    const container1: any = useRef(null);
    const container2: any = useRef(null);
    const container3: any = useRef(null);

    return (
        <section className='liverate-ask-section'>
            <h2>{objLang.title_1}</h2>
            <div className='ask-answer-liverate'>
                <p>{objLang.title_2}</p>
            </div>
            <div className="question-ask-liverate">
                <div className="question-ask-accordion">
                    <ul>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "1" ? "1" : "")}>
                                <div className="header-button"> 
                                    <label> {objLang.questions[0].title} </label> 
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
                                    <p>{objLang.questions[0].description}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "2" ? "2" : "")}>
                                <div className="header-button"> 
                                    <label> {objLang.questions[1].title} </label> 
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
                                <div className="content-area flex flex-col gap-[20px]">
                                    <p>{objLang.questions[1].description_1} </p>
                                    <p>{objLang.questions[1].description_2} </p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <button type="button" onClick={_ => setSelected(selected !== "3" ? "3" : "")}>
                                <div className="header-button"> 
                                    <label> {objLang.questions[2].title} </label> 
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
                                <div className="content-area flex flex-col gap-[20px]">
                                    <p>{objLang.questions[2].description_1} </p>
                                    <p>{objLang.questions[2].description_2} </p>
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
