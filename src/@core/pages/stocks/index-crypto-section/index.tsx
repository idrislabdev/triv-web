"use client"
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import React from 'react'
import { Autoplay  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ILiverateMini } from '@/@core/@types/interfaces';

const StocksIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='stocks-index-crypto-section'>
            <Swiper loop={true} slidesPerView={'auto'} modules={[Autoplay]} autoplay={{ delay: 1000 }}  >
                    {liverates.map((item:ILiverateMini, index:number) => (
                        <SwiperSlide key={index} >
                            <div className='index-cyrpto-content'>
                                <div className='crypto-title'>
                                    <label>BTC <span>Rp 10.000.000</span></label>
                                </div>
                                <div className='crypto-index'>
                                    <label><CaretUpIcon color={'#71BBED'} /><span className='text-red-600'>8.08%</span></label>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

export default StocksIndexCryptoSection
