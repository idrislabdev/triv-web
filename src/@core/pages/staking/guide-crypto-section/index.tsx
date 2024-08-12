import Image from 'next/image'
import React from 'react'

const StakingGuideCryptoSection = (props: {lang:string}) => {
    const { lang } = props
    return (
        <section className='staking-guide-crypto-section'>
            <div className='guide-container'>
                <h2>{lang.title}</h2>
                <div className='guide-steps'>
                    <ul>
                        <li>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-koin.png' alt='step koin' width={60} height={60}/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{lang.guides[0].title}</h5>
                                <p>{lang.guides[0].description}</p>
                            </div>
                        </li>
                        <li>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-jumlah.png' alt='step koin' width={60} height={60}/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{lang.guides[1].title}</h5>
                                <p>{lang.guides[1].description}</p>
                            </div>
                        </li>
                        <li>
                            <div className='guide-icon'>
                                <Image src='/images/others/step-bunga.png' alt='step koin' className='step-koin' width={65.5} height={74}/>
                            </div>
                            <div className='guide-desc'>
                                <h5>{lang.guides[2].title}</h5>
                                <p>{lang.guides[2].description}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='image-container'>
                <Image src='/images/devices/iphone-with-description-2.png' alt='iphone with description' width={620} height={519} />
            </div>
        </section>
    )
}

export default StakingGuideCryptoSection
