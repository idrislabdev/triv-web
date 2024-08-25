import CardCoupon from '@/@core/components/cards/card-coupon'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import React from 'react'

const AffliateComissionsection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='affliate-comission-section'>
        <div className='comission-container'>
          <h2>{objLang.title}</h2>
          <div className='coupon-subcontainer'>
            <CardCoupon item={{value:'0.1%', description: 'For every downline sales transaction'}} />
            <CardCoupon item={{value:'0.2%', description: 'For every Purchase Transaction / Top Up Wallet Downline'}} />
          </div>
        </div>
    </section>
  )
}

export default AffliateComissionsection
