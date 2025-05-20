"use client"

import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const FuturesPemisahanSection = (props : {objLang:any}) => {
    const { objLang } = props
    const [active, setActive] = useState('spot')
    const [imgs, setImgs] = useState<string[]>(['overview', 'spot', 'futures'])
    const swiperRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);



    const handleSlideTo = (val:string, index:number) => {
        if (swiperInstance) {
            swiperInstance.slideTo(index);
            setActive(val)
        }
    };

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }, []);

    
    return (
        <section className='futures-pemisahan-section'>
            <div className='main-container'>
                <div className='title-subcontainer'>
                    <h2>{objLang.title_1} <span>{objLang.title_2}</span></h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='subcontainer'>
                    <ul>
                        <li className={`${active == 'overview' ? 'active' : ''}`}>
                            <a onClick={() => handleSlideTo('overview', 0)}>Overview</a>
                        </li>
                        <li className={`${active == 'spot' ? 'active' : ''}`}>
                            <a onClick={() => handleSlideTo('spot', 1)}>Spot</a>
                        </li>
                        <li className={`${active == 'futures' ? 'active' : ''}`}>
                            <a onClick={() => handleSlideTo('futures', 2)}>Futures</a>
                        </li>
                    </ul>
                    <div className='swiper-images'>
                        <Swiper 
                            modules={[Navigation, Pagination]}
                            slidesPerView={'auto'} 
                            loop={true}  
                            centeredSlides={true} 
                            centeredSlidesBounds={true} 
                            navigation
                            pagination={{ clickable: true }}
                            onSwiper={setSwiperInstance}
                        >
                            <SwiperSlide>
                                <div className='image-container spot'>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='image-container overview'>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='image-container futures'>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FuturesPemisahanSection