import Image from 'next/image'
import React from 'react'

const HomeMediaSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-media-section'>
            <h2>{objLang.title}</h2>
            <div className='media-list'>
                <div className='media-thumb'>
                    <Image src='/images/medias/cnbc-logo.png' alt='cnbc logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/kontan-logo.png' alt='kontan logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/dailysocial-logo.png' alt='dailysocial logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/tirto-logo.png' alt='tirto logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/detikfinance-logo.png' alt='detikfinance logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/kumparan-logo.png' alt='kumparan logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/suara-logo.png' alt='suara logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/beritasatu-logo.png' alt='beritasatu logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/tempo-logo.png' alt='tempo logo' width={0} height={0} sizes='100%'/>
                </div>
            </div>
        </section>
    )
}

export default HomeMediaSection
