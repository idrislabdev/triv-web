import Image from 'next/image'
import React from 'react'

const AffliateDownlineSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='affliate-downline-section'>
            <div className='downline-container'>
                <div className='content-subcontainer'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.desc}</p>
                </div>
                <div className='image-subcontainer'>
                    <Image src='/images/others/affliate-downline.png' alt="affliate-downline" width={0} height={0} sizes='100%'/>
                </div>
            </div>
        </section>
  )
}

export default AffliateDownlineSection
