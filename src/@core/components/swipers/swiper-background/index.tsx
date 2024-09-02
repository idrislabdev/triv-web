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
                    <div className='text-subcontainer'>
                        <h5>SINGAPORE</h5>
                        <p>Included in your Travel:Airport Tax, Food Beverages, Acommodation, Tour Guide, Uang saku dari Triv and more.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='text-subcontainer'>
                        <h5>SINGAPORE</h5>
                        <p>Included in your Travel:Airport Tax, Food Beverages, Acommodation, Tour Guide, Uang saku dari Triv and more.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='text-subcontainer'>
                        <h5>SINGAPORE</h5>
                        <p>Included in your Travel:Airport Tax, Food Beverages, Acommodation, Tour Guide, Uang saku dari Triv and more.</p>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='background-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/samples/parallax.png' alt='parallax' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='text-subcontainer'>
                        <h5>SINGAPORE</h5>
                        <p>Included in your Travel:Airport Tax, Food Beverages, Acommodation, Tour Guide, Uang saku dari Triv and more.</p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default SwiperBackground
