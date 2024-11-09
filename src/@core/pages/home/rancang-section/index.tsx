import Image from 'next/image'
import React, { useEffect } from 'react'

const HomeRancangSection = (props: {objLang:any}) => {
    const { objLang } = props
    
    const inViewport = () => {
        const elements = document.getElementsByClassName("home-rancang-new-section");
        var element = elements[0];
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if(window.innerHeight > top && bottom > 0) {
                document.getElementsByClassName("home-rancang-new-section")[0].classList.add('animate')
            } else {
                document.getElementsByClassName("home-rancang-new-section")[0].classList.remove('animate')
            }
        }
       
    }

    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("home-rancang-new-section")[0].classList.add('animate')
    });

    return (
        <section className='home-rancang-new-section'>
            <div className='home-rancang-description'>
                <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span></h2>
                <div className='rancang-description-details'>
                    <div className='rancang-description-details-sub'>
                        <div className='rancang-description-detail fade-in entry-2'>
                            <Image src='/images/3d-icons/3d-kit-crypto.png' alt='3d kit crypto' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_1.title}</h5>
                                <p>{objLang.content_1.description}</p>
                            </div>
                        </div>
                        <div className='rancang-description-detail fade-in entry-3'>
                            <Image src='/images/3d-icons/3d-kit-buy-sell.png' alt='3d buy sell' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_2.title}</h5>
                                <p>{objLang.content_2.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='rancang-description-details-sub fade-in entry-4'>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-kit-spot.png' alt='3d kit spot' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_3.title}</h5>
                                <p>{objLang.content_3.description}</p>
                            </div>
                        </div>
                        <div className='rancang-description-detail fade-in entry-5'>
                            <Image src='/images/3d-icons/3d-kit-deposit.png' alt='3d deposit' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_4.title}</h5>
                                <p>{objLang.content_4.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-rancang-device fade-in entry-6'>
                <Image src='/images/devices/multiple-phones-2.png' alt='phones' width={0} height={0} sizes='100%'/>
            </div>
        </section>
    )
}

export default HomeRancangSection
