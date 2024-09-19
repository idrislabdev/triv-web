import CardCoupon from '@/@core/components/cards/card-coupon'
import { ArrowRightIcon, ChevronRightIcon } from '@/@core/components/custom-icons'
import React from 'react'

const AffliateExtraSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='affliate-extra-section'>
        <div className='extra-container'>
          <div className='content-subcontainer'>
            <h2>{objLang.title}</h2>
            <p>{objLang.desc}</p>
          </div>   
          <a>{objLang.button} <ChevronRightIcon /></a>   
        </div>
    </section>
  )
}

export default AffliateExtraSection
