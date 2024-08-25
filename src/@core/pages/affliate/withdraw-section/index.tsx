import Image from 'next/image'
import React from 'react'

const AffliateWithdrawSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='affliate-withdraw-section'>
            <div className='withdraw-container'>
                <div className='image-subcontainer'>
                    <Image src='/images/others/affliate-withdraw.png' alt="affliate-withdraw" width={0} height={0} sizes='100%'/>
                </div>
                <div className='content-subcontainer'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.desc}</p>
                    <Image src='/images/others/withdraw-component.png' alt="affliate-component" width={0} height={0} sizes='100%'/>
                </div>
            </div>
        </section>
  )
}

export default AffliateWithdrawSection
