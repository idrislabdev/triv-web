import Image from 'next/image'
import React from 'react'

const ProductsRegulasiDeviceSection = (props: {objLang:any}) => {
  const { objLang } = props
  return (
    <section className='products-regulasi-device-section'>
      <div className='image-container'>
        <Image src='/images/devices/iphone-chart.png' alt='3d paperclip' width={0} height={0} sizes='100%'/>
      </div>
      <div className='regulasi-container'>
        <div className='box-subcontainer'>
          <div className='box-title'>
            <Image src='/images/others/3d-paperclip.png' alt='3d paperclip' width={0} height={0} sizes='100%'/>
            <h5>{objLang.liquiditas.title}</h5>
          </div>
          <p>{objLang.liquiditas.content}.</p>
        </div>
        <div className='box-subcontainer'>
          <div className='box-title'>
            <Image src='/images/others/3d-brankas.png' alt='3d brankas' width={0} height={0} sizes='100%'/>
            <h5>{objLang.regulator.title}</h5>
          </div>
          <p>{objLang.regulator.content}.</p>
        </div>
        <div className='regulator-subcontainer'>
          <Image src='/images/otoritas-keuangans/bsi-color.png' className='bsi' alt='bsi' width={0} height={0} sizes='100%'/>
          <Image src='/images/otoritas-keuangans/cisa-color.png' className='cisa' alt='cisa' width={0} height={0} sizes='100%'/>
          <Image src='/images/otoritas-keuangans/bappebti-color.png' className='bappebti' alt='bappebti' width={0} height={0} sizes='100%'/>
          <Image src='/images/otoritas-keuangans/kominfo-color.png' className='kominfo' alt='kominfo' width={0} height={0} sizes='100%'/>
        </div>
      </div>
    </section>
  )
}

export default ProductsRegulasiDeviceSection
