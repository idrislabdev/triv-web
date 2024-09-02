import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const SwiperTestimony = () => {
  return (
    <div className='swiper-testimony'>
        <Swiper modules={[Navigation]} slidesPerView={3} loop={true}  centeredSlides={true} centeredSlidesBounds={true} navigation>
            <SwiperSlide>
                <div className='testimony-card'>
                    <div className='testimony-thumb'>
                        <Image src='/images/testimonies/testimony-dwi.png' alt='tesimony dwi' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='testimony-content'>
                        <p>
                            Triv tercepat untuk transaksi di Triv gak perlu diragukan lagi dalam hitungan menit semua transaksi beres
                        </p>
                        <div className='testimony-name-tag'>
                            <h5>Dwi</h5>
                            <p>Marketing</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='testimony-card'>
                    <div className='testimony-thumb'>
                        <Image src='/images/testimonies/testimony-rahman.png' alt='imac' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='testimony-content'>
                        <p>
                            Platform yang familiar dan mudah dipahami, untuk deposit dan withdraw cepet banget.real time, cs nya juga ramah. Triv juara deh pokoknya.
                        </p>
                        <div className='testimony-name-tag'>
                            <h5>Rahman</h5>
                            <p>Videografer</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='testimony-card'>
                    <div className='testimony-thumb'>
                        <Image src='/images/testimonies/testimony-utami.png' alt='testimony utami' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='testimony-content'>
                        <p>
                            Selalu update sudah bagus aplikasinya, semoga update dan berekembang lebiih baik lagi
                        </p>
                        <div className='testimony-name-tag'>
                            <h5>Utami</h5>
                            <p>Content Creator</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='testimony-card'>
                    <div className='testimony-thumb'>
                        <Image src='/images/testimonies/testimony-satria.png' alt='imac' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='testimony-content'>
                        <p>
                            Suka banget sama aplikasi ini, jujur ini bagus dan gak ribet, saran aja ya tolong crypto nya lebih banyak lagi dan lebih cepat bisa invest lebih banyak juga.. Terima kasih.
                        </p>
                        <div className='testimony-name-tag'>
                            <h5>Satria</h5>
                            <p>Wartawan</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default SwiperTestimony
