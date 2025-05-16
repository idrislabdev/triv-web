"use client"

import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

const FuturesWhyCryptoSection = () => {
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
                    <h2>Apa itu <span>Futures</span> Kripto</h2>
                    <p>
                        Market Futures Kripto adalah instrumen yang bikin 
                        kamu bisa memanfaatkan perubahan harga kripto 
                        tanpa harus punya koinnya, cukup buka posisi long 
                        atau short sesuai kondisi pasar. 
                        Mulai trading sekarang di TRIV dan eksplor berbagai 
                        peluang bareng <span>#FuturesnyaTriv</span>.
                    </p>
                </div>
                <div className='why-text'>
                    <h5>Mengapa Trading <span>Futures</span> di Triv</h5>
                </div>
            </div>
            <div className='swiper-why'>
                <Swiper modules={[Navigation]} slidesPerView={'auto'} loop={true}  centeredSlides={true} centeredSlidesBounds={true} navigation>
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
                                    <h5>Aman, Legal, dan Terpercaya Sejak 2015</h5>
                                    <p>
                                        TRIV sudah ada sejak 2015 dan diawasi langsung oleh Bappebti. 
                                        Aman, legal, dan bikin kamu bisa fokus trading tanpa rasa khawatir.
                                    </p>
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
                                    <h5>Market yang Beragam, Peluang Lebih Besar</h5>
                                    <p>
                                        TRIV menyediakan banyak pilihan market futures kripto — dari BTC 
                                        hingga altcoin yang lagi hype. Semakin luas pilihannya, 
                                        semakin besar potensi keuntungannya.
                                    </p>
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
                                    <h5>Untung di Market Naik Maupun Turun</h5>
                                    <p>
                                        Di market futures, kamu bisa buka posisi long atau short sesuai 
                                        arah market. Jadi kamu tetap bisa dapet peluang, meski market 
                                        sedang turun.
                                    </p>
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
                                    <h5>Support Aktif 24/7, Siap Bantu Kapan Aja</h5>
                                    <p>
                                        Tim support TRIV tersedia 24/7 dan selalu siap saat dibutuhkan. 
                                        Dukungan maksimal biar pengalaman trading kamu makin lancar.
                                    </p>
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
                                    <h5>Strategi Aman, Profit Maksimal</h5>
                                    <p>
                                        Dengan fitur Take Profit & Stop Loss, kamu bisa atur batas keuntungan dan kerugian sejak awal. 
                                        Strategi jadi lebih disiplin, 
                                        dan kamu tetap tenang meski market bergerak cepat.
                                    </p>
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