import Image from 'next/image'
import React from 'react'

const HomeRancangSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-rancang-new-section'>
            <div className='home-rancang-description'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span></h2>
                <div className='rancang-description-details'>
                    <div className='rancang-description-details-sub'>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-kit-crypto.png' alt='3d kit crypto' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_1.title}</h5>
                                <p>{objLang.content_1.description}</p>
                            </div>
                        </div>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-kit-spot.png' alt='3d kit spot' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_2.title}</h5>
                                <p>{objLang.content_2.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className='rancang-description-details-sub'>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-kit-buy-sell.png' alt='3d buy sell' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_3.title}</h5>
                                <p>{objLang.content_3.description}</p>
                            </div>
                        </div>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-kit-deposit.png' alt='3d deposit' width={0} height={0} sizes='100%'/>
                            <div className='description-detail'>
                                <h5>{objLang.content_4.title}</h5>
                                <p>{objLang.content_4.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-rancang-device'>
                <Image src='/images/devices/multiple-phones.png' alt='phones' width={0} height={0} sizes='100%'/>
            </div>
        </section>
    )
}

export default HomeRancangSection
