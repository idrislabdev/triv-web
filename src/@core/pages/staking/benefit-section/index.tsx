import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React, { useEffect } from 'react'

const StakingBenefitSection = (props: {objLang:any}) => {
    const { objLang } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("staking-benefit-section");
        var element = elements[0];
        if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if(window.innerHeight > top && bottom > 0) {
                document.getElementsByClassName("staking-benefit-section")[0].classList.add('animate')
            } else {
                document.getElementsByClassName("staking-benefit-section")[0].classList.remove('animate')
            }
        }
      }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("staking-benefit-section")[0].classList.add('animate')
    });
    return (
        <section className='staking-benefit-section'>
            <div className='media-container fade-in entry-1'>
                <div className='frame-media'>
                    <iframe allow="autoplay; encrypted-media" id="player" src="https://www.youtube.com/embed/YHxGlMC9aak" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
                <div className='description-media'>
                    <h5>{objLang.media.title}</h5>
                    <p>{objLang.media.description}</p>
                </div>
            </div>
            <div className='benefit-container'>
                <h2 className='fade-in entry-2'>{objLang.benefit.title_1} <span>{objLang.benefit.title_2}</span> {objLang.benefit.title_3}</h2>
                <div className='benefit-type-container fade-in entry-3'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/insured-new.png' alt='insured icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[0].title}</h4>
                        <p>{objLang.benefit.benefits[0].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container fade-in entry-4'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/fee-new.png' alt='fee icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[1].title}</h4>
                        <p>{objLang.benefit.benefits[1].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container fade-in entry-5'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/dividen-new.png' alt='dividen icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[2].title}</h4>
                        <p>{objLang.benefit.benefits[2].description}</p>
                    </div>
                </div>
                <button>{objLang.benefit.button}  <ArrowRightIcon color={'#fff'} /></button>
            </div>
        </section>
    )
}

export default StakingBenefitSection
