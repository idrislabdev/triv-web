import Image from 'next/image'
import React from 'react'

const HomeRancangSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-rancang-section'>
            <div className='home-rancang-device'>
                <Image src='/images/devices/imac.png' alt='imac' width={492} height={407}/>
            </div>
            <div className='home-rancang-description'>
                <h2>{objLang.title}</h2>
                <div className='rancang-description-details'>
                    <div className='rancang-description-details-sub'>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-bitcoin.png' alt='3d bitcoin' width={70} height={70}/>
                            <h5>{objLang.content_1.title}</h5>
                            <p>{objLang.content_1.description}</p>
                        </div>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-cloud-bitcoin.png' alt='3d cloud bitcoin' width={70} height={70}/>
                            <h5>{objLang.content_2.title}</h5>
                            <p>{objLang.content_2.description}</p>
                        </div>
                    </div>
                    <div className='rancang-description-details-sub'>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-blockchain.png' alt='3d blockchain' width={70} height={70}/>
                            <h5>{objLang.content_3.title}</h5>
                            <p>{objLang.content_3.description}</p>
                        </div>
                        <div className='rancang-description-detail'>
                            <Image src='/images/3d-icons/3d-clock.png' alt='3d clock' width={70} height={70}/>
                            <h5>{objLang.content_4.title}</h5>
                            <p>{objLang.content_4.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeRancangSection
