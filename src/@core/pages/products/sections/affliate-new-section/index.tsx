import CardCoupon from '@/@core/components/cards/card-coupon'
import { ArrowRightIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsAffliateNewSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-affliate-new-section'>
        <div className='affliate-container'>
            <div className='image-subcontainer'>
                <Image src='/images/others/digital-marketing-2.png' alt='digital marketing' width={0} height={0} sizes='100%'/>
            </div>
            <div className='text-subcontainer'>
                <div className='left-subcontainer'>
                    <div className='sub-subcontainer'>
                        <h5>{objLang.title_1}</h5>
                        <p>{objLang.content_1}</p>
                    </div>
                    <div className='sub-subcontainer'>
                        <h5>{objLang.title_2}</h5>
                        <p>{objLang.content_2}</p>
                    </div>
                </div>
                <div className='right-subcontainer'>
                    <h5>{objLang.follow_text}</h5>
                    <div className='button-group'>
                        <button>{objLang.button_1}</button>
                        <button>{objLang.button_2}</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsAffliateNewSection
