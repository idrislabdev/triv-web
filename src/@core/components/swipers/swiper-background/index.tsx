import Image from 'next/image';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


const SwiperBackground = () => {
  return (
    <div className='swiper-background'>
        <Swiper modules={[Navigation]} slidesPerView={1} loop={true} loopAddBlankSlides={false} navigation>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperBackground
