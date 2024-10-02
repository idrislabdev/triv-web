import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee";

const HomeMediaSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='home-media-section'>
            <h2>{objLang.title}</h2>
            <Marquee>
                <div className='media-thumb'>
                    <Image src='/images/medias/cnbc-logo.png' className='cnbc-logo' alt='cnbc logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/kontan-logo.png' className='kontan-logo' alt='kontan logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/dailysocial-logo.png' className='dailysocial-logo' alt='dailysocial logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/tirto-logo.png' className='tirto-logo' alt='tirto logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/detikfinance-logo.png' className='detikfinance-logo' alt='detikfinance logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/kumparan-logo.png' className='kumparan-logo' alt='kumparan logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/suara-logo.png' className='suara-logo' alt='suara logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/beritasatu-logo.png' className='beritasatu-logo' alt='beritasatu logo' width={0} height={0} sizes='100%'/>
                </div>
                <div className='media-thumb'>
                    <Image src='/images/medias/tempo-logo.png' className='tempo-logo' alt='tempo logo' width={0} height={0} sizes='100%'/>
                </div>
            </Marquee>
        </section>
    )
}

export default HomeMediaSection
