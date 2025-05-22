"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const FuturesStepSection = (props : {objLang:any}) => {
    const { objLang } = props
    const [active, setActive] = useState('1');

    //  const inViewport = () => {
    //     const elements = document.getElementsByClassName("futures-step-section");
    //     var element = elements[0];
    //     if (element) {
    //         const { top, bottom } = element.getBoundingClientRect();
    //         console.log(window.innerWidth)
    //         if(window.innerHeight > top && bottom > 0) {
    //             document.getElementsByClassName("futures-step-section")[0].classList.add('active-mobile')
    //         } else {
    //             document.getElementsByClassName("futures-step-section")[0].classList.remove('active-mobile')
    //         }
    //     }
    // }
    
    // useEffect(() => {
    //     window.addEventListener("scroll", inViewport, { passive: true });
    //     document.getElementsByClassName("futures-step-section")[0].classList.add('active-mobile')
    // });

    return (
        <section className='futures-step-section'>
            <div className='main-container'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                <div className='subcontainer'>
                    <div className='step-row'>
                        <div 
                            className={`step ${active == '1' ? 'active' : ''}`} 
                            onMouseEnter={() => setActive('1')} 
                            onMouseLeave={() => setActive('')}
                        >
                            <div className='text-area'>
                                <h5><span>1.</span>{objLang.step_1.title}</h5>
                                <p>{objLang.step_1.description}</p>
                            </div>
                            <div className='img-area'>
                                <Image src='/images/futures/step-topup.png' alt='step-topup' width={0} height={0} sizes='100%'/>
                            </div>
                        </div>
                        <div 
                            className={`step ${active == '2' ? 'active' : ''}`} 
                            onMouseEnter={() => setActive('2')} 
                            onMouseLeave={() => setActive('')}
                        >
                            <div className='text-area'>
                                <h5><span>2.</span>{objLang.step_2.title}</h5>
                                <p>{objLang.step_2.description}</p>
                            </div>
                            <div className='img-area'>
                                <Image src='/images/futures/step-transfer.png' alt='step-transfer' width={0} height={0} sizes='100%'/>
                            </div>
                        </div>
                    </div>
                    <div className='step-row'>
                        <div 
                            className={`step ${active == '3' ? 'active' : ''}`} 
                            onMouseEnter={() => setActive('3')} 
                            onMouseLeave={() => setActive('')}
                        >
                            <div className='text-area'>
                                <h5><span>3.</span>{objLang.step_3.title}</h5>
                                <p>{objLang.step_3.description}</p>
                            </div>
                            <div className='img-area'>
                                <Image src='/images/futures/step-market.png' alt='step-market' width={0} height={0} sizes='100%'/>
                            </div>
                        </div>
                        <div 
                            className={`step ${active == '4' ? 'active' : ''}`} 
                            onMouseEnter={() => setActive('4')} 
                            onMouseLeave={() => setActive('')}
                        >
                            <div className='text-area'>
                                <h5><span>4.</span>{objLang.step_4.title}</h5>
                                <p>{objLang.step_4.description}</p>
                            </div>
                            <div className='img-area'>
                                <Image src='/images/futures/step-strategy.png' alt='step-strategy' width={0} height={0} sizes='100%'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FuturesStepSection