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
                    <h5>Triv Affiliate</h5>
                    <p>Dengan program Affiliate kami setiap downline melakukan transaksi, anda akan mendapatkan cashback 10% tanpa syarat!</p>
                </div>
                <div className='sub-subcontainer'>
                    <h5>Undang teman dan saudara</h5>
                    <p>Affiliate Triv tidak memiliki masa kadaluarsa dan berlaku seumur hidup, selama downline anda melakukan transaksi, maka anda akan tetap mendapatkan komisi tanpa batasan waktu.</p>
                </div>
            </div>
            <div className='end-subcontainer'>
                <h5>Ajak teman dan dapatkan tambahan penghasilan</h5>
                <div className='button-group'>
                    <button>Affiliate Program</button>
                    <button>Invite Friends</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductsAffliateSection
