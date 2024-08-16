"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import { ILiverateMini } from '@/@core/@types/interfaces';

const BaruCryptoSection = () => {
    return (
        <section className='home-baru-crypto-section'>
            <div className='baru-crypto-title'>
                <h5>Baru di crypto?</h5>
                <p>Ikuti panduan dan tutorial dari video TRIV</p>
                <a>Lihat Semua Video</a>
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
                <a>Lihat Semua Video</a>
            </div>
        </section>
        // <Swiper
        //     spaceBetween={10}
        //     slidesPerView={5}
        //     onSlideChange={() => console.log('slide change')}
        //     onSwiper={(swiper) => console.log(swiper)}
        // >
        //     <SwiperSlide><div className='text-black'>Slide 1</div></SwiperSlide>
        //     <SwiperSlide><div className='text-black'>Slide 2</div></SwiperSlide>
        //     <SwiperSlide><div className='text-black'>Slide 3</div></SwiperSlide>
        //     <SwiperSlide><div className='text-black'>Slide 4</div></SwiperSlide>
        //     ...
        // </Swiper>
    )
}

export default BaruCryptoSection
