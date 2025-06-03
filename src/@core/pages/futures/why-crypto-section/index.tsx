"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const FuturesWhyCryptoSection = (props: {objLang:any, lang:string}) => {
    const { objLang, lang } = props
    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }, []);
  return (
    <section className='futures-why-crypto-section'>
        <div className='main-container'>
            <div className='title-subcontainer'>
                <div className='what-text'>
                    {lang == 'id' && <h2>{objLang.what_title_1} <span>{objLang.what_title_2}</span> {objLang.what_title_3}?</h2> }
                    {lang == 'en' && <h2>{objLang.what_title_1} {objLang.what_title_2} <span>{objLang.what_title_3}</span>?</h2> }
                    <p>
                        {objLang.what_description} <span>#FuturesnyaTriv</span>.
                    </p>
                </div>
                <div className='why-text'>
                    <h5>{objLang.why_title_1} <span>{objLang.why_title_2}</span> {objLang.why_title_3}</h5>
                </div>
            </div>
            <div className='swiper-why'>
                <Swiper 
                    modules={[Navigation]} 
                    slidesPerView={'auto'} 
                    loop={true}  
                    centeredSlides={true} 
                    centeredSlidesBounds={true} 
                    speed={1000}
                >
                    <SwiperSlide>
                        <div className='background-container'>
                            <div className='image-subcontainer'>
                                <Image src='/images/futures/aman-legal.png' alt='aman-legal' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='area-subcontainer'>
                                <div className='img-area'>
                                    <Image src='/images/futures/shield.png' alt='shield' width={0} height={0} sizes='100%'/>
                                </div>
                                <div className='text-area'>
                                    <h5>{objLang.carousel_1.title}</h5>
                                    <p>{objLang.carousel_1.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='background-container'>
                            <div className='image-subcontainer'>
                                <Image src='/images/futures/market-beragam.png' alt='market-beragam' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='area-subcontainer'>
                                <div className='img-area'>
                                    <Image src='/images/futures/coins.png' alt='coins' width={0} height={0} sizes='100%'/>
                                </div>
                                <div className='text-area'>
                                    <h5>{objLang.carousel_2.title}</h5>
                                    <p>{objLang.carousel_2.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='background-container'>
                            <div className='image-subcontainer'>
                                <Image src='/images/futures/untung-market-2.png' alt='untung-market' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='area-subcontainer'>
                                <div className='img-area'>
                                    <Image src='/images/futures/transfer.png' alt='transfer' width={0} height={0} sizes='100%'/>
                                </div>
                                <div className='text-area'>
                                    <h5>{objLang.carousel_3.title}</h5>
                                    <p>{objLang.carousel_3.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='background-container'>
                            <div className='image-subcontainer'>
                                <Image src='/images/futures/support-24jam.png' alt='support-24jam' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='area-subcontainer'>
                                <div className='img-area'>
                                    <Image src='/images/futures/headset.png' alt='headset' width={0} height={0} sizes='100%'/>
                                </div>
                                <div className='text-area'>
                                    <h5>{objLang.carousel_4.title}</h5>
                                    <p>{objLang.carousel_4.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='background-container'>
                            <div className='image-subcontainer'>
                                <Image src='/images/futures/strategi-aman.png' alt='strategi-aman' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='area-subcontainer'>
                                <div className='img-area'>
                                    <Image src='/images/futures/chart.png' alt='chart' width={0} height={0} sizes='100%'/>
                                </div>
                                <div className='text-area'>
                                    <h5>{objLang.carousel_5.title}</h5>
                                    <p>{objLang.carousel_5.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default FuturesWhyCryptoSection