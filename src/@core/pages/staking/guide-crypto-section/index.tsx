import Image from 'next/image'
import React, { useEffect } from 'react'

const StakingGuideCryptoSection = (props: {objLang:any}) => {
    const { objLang } = props

    const inViewport = () => {
        const elements = document.getElementsByClassName("staking-guide-crypto-section");
        var element = elements[0];
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if(window.innerHeight > top && bottom > 0) {
                document.getElementsByClassName("staking-guide-crypto-section")[0].classList.add('animate')
            } else {
                document.getElementsByClassName("staking-guide-crypto-section")[0].classList.remove('animate')
            }
        }
      }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("staking-guide-crypto-section")[0].classList.add('animate')
    });


    return (
        <section className='staking-guide-crypto-section'>
            <div className='guide-container'>
                <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                <div className='guide-steps'>
                    <ul>
                        <li className='fade-in entry-2'>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-1.png' alt='step 1' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{objLang.guides[0].title}</h5>
                                <p>{objLang.guides[0].description}</p>
                            </div>
                        </li>
                        <li className='fade-in entry-3'>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-2.png' alt='step 2' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{objLang.guides[1].title}</h5>
                                <p>{objLang.guides[1].description}</p>
                            </div>
                        </li>
                        <li className='fade-in entry-4'>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-3.png' alt='step 3' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{objLang.guides[2].title}</h5>
                                <p>{objLang.guides[2].description}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='image-container'>
                <Image src='/images/devices/iphone-with-background.png' className='fade-in entry-5' alt='iphone with background' width={0} height={0} sizes='100%'/>
            </div>
        </section>
    )
}

export default StakingGuideCryptoSection
