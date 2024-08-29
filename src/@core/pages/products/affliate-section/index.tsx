import CardCoupon from '@/@core/components/cards/card-coupon'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsAffliateSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-affliate-section'>
        <div className='affliate-container'>
            <Image src='/images/others/3d-gift.png' alt='3d-gift' width={0} height={0} sizes='100%'/>
            <div className='middle-subcontainer'>
                <div className='sub-subcontainer'>
                    <h5>{objLang.title_1}</h5>
                    <p>{objLang.content_1}</p>
                </div>
                <div className='sub-subcontainer'>
                    <h5>{objLang.title_2}</h5>
                    <p>{objLang.content_2}</p>
                </div>
            </div>
            <div className='end-subcontainer'>
                <h5>{objLang.follow_text}</h5>
                <div className='button-group'>
                    <button>{objLang.button_1}</button>
                    <button>{objLang.button_2}</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsAffliateSection
