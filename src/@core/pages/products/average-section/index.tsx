import { CpuIcon, HeadsetIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsAverageSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-average-section'>
            <div className='box-container'>
                <div className='sub-container'>
                    <div className='detail-subcontainer'>
                        <div className='detail-info'>
                            <HeadsetIcon color={'#fff'} />
                            <label>51<span>S</span></label>
                        </div>
                        <div className='detail-description-subcontainer'>
                            <h5>{objLang.live_chat.title}</h5>
                            <p>{objLang.live_chat.content} <span>{objLang.updated_text}</span></p>
                        </div>
                    </div>
                    <div className='detail-subcontainer'>
                        <div className='detail-info'>
                            <CpuIcon color={'#fff'} />
                            <label>102<span>S</span></label>
                        </div>
                        <div className='detail-description-subcontainer'>
                            <h5>{objLang.processing.title}</h5>
                            <p>{objLang.processing.content} <span>{objLang.updated_text} </span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProductsAverageSection
