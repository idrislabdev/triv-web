import Image from 'next/image'
import React from 'react'

const HomeInvestasiSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-investasi-section'>
            <div className='investasi-section-box'>
                <h2>{objLang.title}</h2>
                <div className='investasi-details'>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_1.title}</h5>
                            <p>{objLang.content_1.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-15pro-a.png' alt='iphone 15 pro' width={193} height={286} />
                    </div>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_2.title}</h5>
                            <p>{objLang.content_2.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-15pro-b.png' alt='iphone 15 pro' width={193} height={286} />
                    </div>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_3.title}</h5>
                            <p>{objLang.content_3.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-15pro-c.png' alt='iphone 15 pro' width={193} height={286} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeInvestasiSection
