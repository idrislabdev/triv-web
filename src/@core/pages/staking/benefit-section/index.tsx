import Image from 'next/image'
import React from 'react'

const StakingBenefitSection = (props: {lang:any}) => {
    const { lang } = props
    return (
        <section className='staking-benefit-section'>
            <div className='media-container'>
                <div className='frame-media'>
                    <iframe allow="autoplay; encrypted-media" id="player" src="https://www.youtube.com/embed/YHxGlMC9aak" frameBorder="0" allowFullScreen>
                    </iframe>
                </div>
                <div className='description-media'>
                    <h5>{lang.media.title}</h5>
                    <p>{lang.media.description}</p>
                </div>
            </div>
            <div className='benefit-container'>
                <h2>{lang.benefit.title}</h2>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/insured.png' alt='insured icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{lang.benefit.benefits[0].title}</h4>
                        <p>{lang.benefit.benefits[0].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/fee.png' alt='fee icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{lang.benefit.benefits[1].title}</h4>
                        <p>{lang.benefit.benefits[1].description}</p>
                    </div>
                </div>
                <div className='benefit-type-container'>
                    <div className='benefit-icon'>
                        <Image src='/images/others/dividen.png' alt='dividen icon' width={60} height={60}/>
                    </div>
                    <div className='benefit-desc'>
                        <h4>{lang.benefit.benefits[2].title}</h4>
                        <p>{lang.benefit.benefits[2].description}</p>
                    </div>
                </div>
                <button>{lang.benefit.button}</button>
            </div>
        </section>
    )
}

export default StakingBenefitSection
