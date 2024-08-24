"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { ArrowRightIcon } from '@/@core/components/custom-icons';

const BlogBaruCryptoSection = (props: { objLang:any }) => {
    const { objLang } = props
    return (
        <section className='blog-baru-crypto-section'>
            <div className='blog-baru-crypto-container'>
                <div className='baru-crypto-title'>
                    <h5>{objLang.title}</h5>
                    <p>{objLang.description}</p>
                    <a>{objLang.button} <ArrowRightIcon color={'#fff'}/></a>
                </div>
                <div className='baru-crypto-videos'>
                    <Swiper slidesPerView={'auto'}>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <Image src='/images/video-thumbs/video-1.png' alt='video-tutorial' width={300} height={169}/>
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <a>Lihat Semua Video <ArrowRightIcon color={'#fff'}/></a>
                </div>
            </div>
        </section>
    )
}

export default BlogBaruCryptoSection
