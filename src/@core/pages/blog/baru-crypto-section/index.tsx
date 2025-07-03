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
                    <Swiper slidesPerView={'auto'} loop={true}>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <iframe allow="autoplay; encrypted-media" id="player1" src="https://www.youtube.com/embed/YHxGlMC9aak?si=TAZMDF8QF6lGsGPt" frameBorder="0" allowFullScreen />
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Staking Rupiah</h6>
                                    <a href='https://youtu.be/YHxGlMC9aak?si=4dNj3nCAZNCeHbMT' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <iframe allow="autoplay; encrypted-media" id="player2" src="https://www.youtube.com/embed/h5UxM8Fkw5w?si=9XpXVDKuIP4t3A-H" frameBorder="0" allowFullScreen />
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Deposit Rupiah</h6>
                                    <a href='https://youtu.be/h5UxM8Fkw5w?si=WiCDPbRJbQp5pU1l' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <iframe allow="autoplay; encrypted-media" id="player3" src="https://www.youtube.com/embed/oGeEprlnnmU?si=EZ_w_wlk0woIhHjx" frameBorder="0" allowFullScreen />
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Market</h6>
                                    <a href='https://youtu.be/oGeEprlnnmU?si=IOi1lFjf9VYNnZ28' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <iframe allow="autoplay; encrypted-media" id="player4" src="https://www.youtube.com/embed/X5_Gza2lxzM?si=ivSqUBXGXm9zhLuB" frameBorder="0" allowFullScreen />
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Auto Invest</h6>
                                    <a href='https://youtu.be/X5_Gza2lxzM?si=ST1siiY7cYWWnPVR' target='_blank'>Tutorial</a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='crypto-thumb-video'>
                                <div className='video-thumb'>
                                    <iframe allow="autoplay; encrypted-media" id="player5" src="https://www.youtube.com/embed/SqhShrvK16k?si=DcqoebYjgap3_XCb" frameBorder="0" allowFullScreen />
                                </div>
                                <div className='video-title'>
                                    <h6>Tutorial Futures</h6>
                                    <a href='https://youtu.be/SqhShrvK16k?si=248heGujQjxr5skL' target='_blank'>Tutorial</a>
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
