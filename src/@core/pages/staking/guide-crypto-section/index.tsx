import Image from 'next/image'
import React from 'react'

const StakingGuideCryptoSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='staking-guide-crypto-section'>
            <div className='guide-container'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                <div className='guide-steps'>
                    <ul>
                        <li>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-1.png' alt='step 1' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{objLang.guides[0].title}</h5>
                                <p>{objLang.guides[0].description}</p>
                            </div>
                        </li>
                        <li>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-2.png' alt='step 2' width={0} height={0} sizes='100%'/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{objLang.guides[1].title}</h5>
                                <p>{objLang.guides[1].description}</p>
                            </div>
                        </li>
                        <li>
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
                <Image src='/images/devices/iphone-with-background.png' alt='iphone with background' width={0} height={0} sizes='100%'/>
            </div>
        </section>
    )
}

export default StakingGuideCryptoSection
