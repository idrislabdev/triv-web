import { TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'

const StocksWhySection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='stocks-why-section'>
            <div className='container'>
                <div className='logo-container'>
                    <TrivIcon color={'#318AC6'} />
                </div>
                <div className='title-container'>
                    <h1>{objLang.title}</h1>
                    <p>{objLang.description}</p>
                </div>
                <div className='description-container'>
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
        </section>
  )
}

export default StocksWhySection



