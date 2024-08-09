"use client"

import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

const StakingTestimonyCarouselSection = () => {
  return (
    <section className='staking-testimony-carousel-section'>
        <div className='swiper-testimony'>
            <Swiper slidesPerView={3} loop={true} centeredSlides={true}>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <div className='testimony-thumb'>
                            <Image src='/images/testimonies/testimony-1.png' alt='imac' width={250} height={215}/>
                        </div>
                        <div className='testimony-content'>
                            <p>
                                Amazing.. baru gabung aja sudah bisa merasakan untungnya, 
                                buat kamu semua invetsasi yuk di Triv 
                                tinggal download aplikasinya langsung bisa digunakan deh.
                            </p>
                            <div className='testimony-name-tag'>
                                <h5>Pandji</h5>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <div className='testimony-thumb'>
                            <Image src='/images/testimonies/testimony-1.png' alt='imac' width={250} height={215}/>
                        </div>
                        <div className='testimony-content'>
                            <p>
                                Amazing.. baru gabung aja sudah bisa merasakan untungnya, 
                                buat kamu semua invetsasi yuk di Triv 
                                tinggal download aplikasinya langsung bisa digunakan deh.
                            </p>
                            <div className='testimony-name-tag'>
                                <h5>Pandji</h5>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <div className='testimony-thumb'>
                            <Image src='/images/testimonies/testimony-1.png' alt='imac' width={250} height={215}/>
                        </div>
                        <div className='testimony-content'>
                            <p>
                                Amazing.. baru gabung aja sudah bisa merasakan untungnya, 
                                buat kamu semua invetsasi yuk di Triv 
                                tinggal download aplikasinya langsung bisa digunakan deh.
                            </p>
                            <div className='testimony-name-tag'>
                                <h5>Pandji</h5>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <div className='testimony-thumb'>
                            <Image src='/images/testimonies/testimony-1.png' alt='imac' width={250} height={215}/>
                        </div>
                        <div className='testimony-content'>
                            <p>
                                Amazing.. baru gabung aja sudah bisa merasakan untungnya, 
                                buat kamu semua invetsasi yuk di Triv 
                                tinggal download aplikasinya langsung bisa digunakan deh.
                            </p>
                            <div className='testimony-name-tag'>
                                <h5>Pandji</h5>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='testimony-card'>
                        <div className='testimony-thumb'>
                            <Image src='/images/testimonies/testimony-1.png' alt='imac' width={250} height={215}/>
                        </div>
                        <div className='testimony-content'>
                            <p>
                                Amazing.. baru gabung aja sudah bisa merasakan untungnya, 
                                buat kamu semua invetsasi yuk di Triv 
                                tinggal download aplikasinya langsung bisa digunakan deh.
                            </p>
                            <div className='testimony-name-tag'>
                                <h5>Pandji</h5>
                                <p>Entrepreneur</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default StakingTestimonyCarouselSection
