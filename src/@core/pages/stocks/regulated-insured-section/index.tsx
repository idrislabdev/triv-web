import Image from 'next/image'
import React from 'react'

const StockRegulatedInsuredSection = (props: {langObj:any}) => {
    const { langObj } = props
    return (
        <section className='stocks-regulated-insured-section'>
            <div className='box-container'>
                <h2>{langObj.title}</h2>
                <div className='sub-container'>
                    <div className='detail-subcontainer'>
                        <Image src='/images/others/24hour-insured.png' alt='24 hour insured' width={80} height={80} />
                        <div className='detail-description-subcontainer'>
                            <h5>{langObj.hour_insured.title}</h5>
                            <p>{langObj.hour_insured.description}</p>
                        </div>
                    </div>
                    <div className='detail-subcontainer'>
                        <Image src='/images/others/spread-insured.png' alt='spread insured' width={80} height={80} />
                        <div className='detail-description-subcontainer'>
                            <h5>{langObj.spread_insured.title}</h5>
                            <p>{langObj.spread_insured.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default StockRegulatedInsuredSection
