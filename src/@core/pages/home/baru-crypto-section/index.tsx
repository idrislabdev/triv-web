"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { ILiverateMini } from '@/@core/@types/interfaces';

const BaruCryptoSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-baru-crypto-section'>
            <div className='home-baru-crypto-container'>
                <div className='baru-crypto-title'>
                    <h5>{objLang.title}</h5>
                    <p>{objLang.description}</p>
                    <a href='https://www.youtube.com/@TrivIndonesia' target='_blank'>{objLang.button_text}</a>
                </div>
                <div className='baru-crypto-videos'>
                    <Swiper slidesPerView={'auto'}>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-2.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a href='https://www.youtube.com/@TrivIndonesia' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-3.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a href='https://www.youtube.com/@TrivIndonesia' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-4.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a href='https://www.youtube.com/@TrivIndonesia' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <a>Lihat Semua Video</a>
                </div>
            </div>
        </section>
    )
}

export default BaruCryptoSection
