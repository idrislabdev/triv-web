"use client"
import { CaretDown, CaretUp } from '@/app/@core/components/custom-icons';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ILiverateMini } from '@/app/@core/@types/interfaces';

const HomeIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='home-index-crypto-section'>
            <Swiper>
                    {liverates.map((item:ILiverateMini, index:number) => (
                        <SwiperSlide key={index}>
                            <div className='index-cyrpto-content'>
                                <div className='crypto-title'>
                                    <label>BTC <span>Rp 10.000.000</span></label>
                                </div>
                                <div className='crypto-index'>
                                    <label><CaretUp color={'#71BBED'} /><span className='text-red-600'>8.08%</span></label>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </section>
    )
}

export default HomeIndexCryptoSection
