import Image from 'next/image'
import React from 'react'

const StakingBenefitSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='staking-benefit-section'>
            <div className='media-container'>
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
                <h2>{objLang.benefit.title_1} <span>{objLang.benefit.title_2}</span> {objLang.benefit.title_3}</h2>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/insured-new.png' alt='insured icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[0].title}</h4>
                        <p>{objLang.benefit.benefits[0].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/fee-new.png' alt='fee icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[1].title}</h4>
                        <p>{objLang.benefit.benefits[1].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/dividen-new.png' alt='dividen icon' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[2].title}</h4>
                        <p>{objLang.benefit.benefits[2].description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StakingBenefitSection
