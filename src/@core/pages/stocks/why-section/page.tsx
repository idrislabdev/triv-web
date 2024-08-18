import { TrivIcon } from '@/@core/components/custom-icons'
import React from 'react'

const StocksWhySection = (props: {langObj:any}) => {
    const { langObj } = props
    return (
        <section className='stocks-why-section'>
            <div className='container'>
                <div className='logo-container'>
                    <TrivIcon color={'#318AC6'} />
                </div>
                <div className='title-container'>
                    <h1>{langObj.title}</h1>
                    <p>{langObj.description}</p>
                </div>
                <div className='description-container'>
                    <div className='detail-subcontainer'>
                        <h5>{langObj.founded.value}</h5>
                        <p>{langObj.founded.text}</p>
                    </div>
                    <div className='detail-subcontainer'>
                        <h5>{langObj.user_registered.value}</h5>
                        <p>{langObj.user_registered.text}</p>
                    </div>
                    <div className='detail-subcontainer'>
                        <h5>{langObj.asset.value}</h5>
                        <p>{langObj.asset.text}</p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default StocksWhySection



