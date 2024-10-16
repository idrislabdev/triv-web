import Image from 'next/image'
import React, { useEffect } from 'react'

const ProductsRegulasiNewSection = (props: {objLang:any}) => {
  const { objLang } = props
  const inViewport = () => {
    const elements = document.getElementsByClassName("products-regulasi-section");
    var element = elements[0];
    if (element) {
      const { top, bottom } = element.getBoundingClientRect();
      if(window.innerHeight > top && bottom > 0) {
        document.getElementsByClassName("products-regulasi-section")[0].classList.add('animate')
      } else {
        document.getElementsByClassName("products-regulasi-section")[0].classList.remove('animate')
      }
    }
  }

  useEffect(() => {
      window.addEventListener("scroll", inViewport, { passive: true });
      document.getElementsByClassName("products-regulasi-section")[0].classList.add('animate')
  });

  return (
    <section className='products-regulasi-section'>
      <div className='regulasi-container'>
        <div className='box-subcontainer'>
          <div className='img-box fade-in entry-1'>
            <Image src='/images/others/financial-management.png' alt='financial management' width={0} height={0} sizes='100%'/>
          </div>
          <h5 className='fade-in entry-2'>{objLang.liquiditas.title}</h5>
          <p className='fade-in entry-3'>{objLang.liquiditas.content_1} <span>{objLang.liquiditas.content_2}</span> {objLang.liquiditas.content_3}</p>
        </div>
        <div className='box-subcontainer'>
          <div className='img-box fade-in entry-4'>
            <Image src='/images/others/financial-management-2.png' alt='financial management' width={0} height={0} sizes='100%'/>
          </div>
          <h5 className='fade-in entry-5'>{objLang.regulator.title}</h5>
          <p className='fade-in entry-6'>{objLang.regulator.content}.</p>
        </div>
      </div>
    </section>
  )
}

export default ProductsRegulasiNewSection
