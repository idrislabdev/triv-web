import Image from 'next/image'
import React from 'react'

const HomeInvestasiSection = (props: {lang:string, objLang:any}) => {
    const { lang, objLang } = props
    return (
        <section className='home-investasi-section'>
            <div className='investasi-section-box'>
                {lang === 'id' && <h2><span>{objLang.title_1}</span> {objLang.title_2}</h2> }
                {lang === 'en' && <h2>{objLang.title_1} <span>{objLang.title_2}</span></h2> }
                <div className='investasi-details'>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_1.title}</h5>
                            <p>{objLang.content_1.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-register.png' alt='iphone 15 pro register' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_2.title}</h5>
                            <p>{objLang.content_2.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-home.png' alt='iphone 15 pro home' width={0} height={0} sizes='100%' />
                    </div>
                    <div className='investasi-detail'>
                        <div className='investasi-detail-description'>
                            <h5>{objLang.content_3.title}</h5>
                            <p>{objLang.content_3.description}</p>
                        </div>
                        <Image src='/images/devices/iphone-bitcoin.png' alt='iphone 15 pro bitcoin' width={0} height={0} sizes='100%'/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeInvestasiSection
