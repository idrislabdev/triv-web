import React from 'react'
import Image from 'next/image'
import { ArrowRightIcon } from '@/@core/components/custom-icons'

const ProductsTagihanSection = (props: {objLang:any}) => {
    const { objLang } = props
    const pulsas = ['PDAM', 'TELPON']
    return (
        <section className='products-topup-section'>
            <div className='image-container'>
                <Image src='/images/devices/iphone-bayar-tagihan.png' alt='iphone' width={0} height={0} sizes='100%'/>
            </div>
            <div className='description-container'>
                <div className='start-now-description'>
                    <h2>{objLang.title}</h2>
                    <p>{objLang.description}</p>
                </div>
                <div className='form-topup'>
                    <label>{objLang.choose_text}</label>
                    <select>
                        {pulsas.map((item:string, index:number) => (
                            <option value={item} key={index}>{item}</option>
                        ))}
                    </select>
                </div>
                <button>{objLang.button_text} <ArrowRightIcon color={'#fff'}/></button>

            </div>
        </section>
      )
}

export default ProductsTagihanSection
