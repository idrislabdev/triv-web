import { TrivIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const StocksWhySection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='stocks-why-section'>
            <div className='container'>
                <div className='title-container'>
                    <h1>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h1>
                    <p>{objLang.description}</p>
                </div>
                <div className='description-container'>
                    <Image src='/images/backgrounds/rocket-background.png' alt='rocket background' width={0} height={0} sizes='100%' />
                    <div className='details-subcontainer'>
                        <div className='detail-subcontainer'>
                            <h5>{objLang.founded.value}</h5>
                            <p>{objLang.founded.text}</p>
                        </div>
                        <div className='detail-subcontainer'>
                            <h5>{objLang.user_registered.value}</h5>
                            <p>{objLang.user_registered.text}</p>
                        </div>
                        <div className='detail-subcontainer'>
                            <h5>{objLang.asset.value}</h5>
                            <p>{objLang.asset.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default StocksWhySection



