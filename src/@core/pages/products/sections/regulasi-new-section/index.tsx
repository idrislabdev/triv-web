import Image from 'next/image'
import React from 'react'

const ProductsRegulasiNewSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-regulasi-section'>
      <div className='regulasi-container'>
        <div className='box-subcontainer'>
          <div className='img-box'>
            <Image src='/images/others/financial-management.png' alt='financial management' width={0} height={0} sizes='100%'/>
          </div>
          <h5>{objLang.liquiditas.title}</h5>
          <p>{objLang.liquiditas.content_1} <span>{objLang.liquiditas.content_2}</span> {objLang.liquiditas.content_3}</p>
        </div>
        <div className='box-subcontainer'>
          <div className='img-box'>
            <Image src='/images/others/financial-management-2.png' alt='financial management' width={0} height={0} sizes='100%'/>
          </div>
          <h5>{objLang.regulator.title}</h5>
          <p>{objLang.regulator.content}.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductsRegulasiNewSection
