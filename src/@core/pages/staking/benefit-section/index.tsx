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
                <h2>{objLang.benefit.title}</h2>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/insured.png' alt='insured icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[0].title}</h4>
                        <p>{objLang.benefit.benefits[0].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/fee.png' alt='fee icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[1].title}</h4>
                        <p>{objLang.benefit.benefits[1].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/dividen.png' alt='dividen icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{objLang.benefit.benefits[2].title}</h4>
                        <p>{objLang.benefit.benefits[2].description}</p>
                    </div>
                </div>
                <button>{objLang.benefit.button}</button>
            </div>
        </section>
    )
}

export default StakingBenefitSection
