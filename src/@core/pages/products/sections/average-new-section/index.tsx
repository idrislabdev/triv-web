import { CpuIcon, HeadsetIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const ProductsAverageNewSection = (props: {objLang:any}) => {
    const { objLang } = props
    return (
        <section className='products-average-new-section'>
            <div className='box-container'>
                <div className='sub-container'>
                    <div className='detail-subcontainer'>
                        <div className='detail-img'>
                            <Image src='/images/others/male-customer-service.png' alt='male customer service' width={0} height={0} sizes='100%'/>
                            <h5>{objLang.live_chat.time ? objLang.live_chat.time : '51'}<span>S</span></h5>
                        </div>
                        <div className='detail-description-subcontainer'>
                            <p>{objLang.live_chat.title}</p>
                            <div className='flex flex-col gap-[4px]'>
                                <span>{objLang.live_chat.content} </span>
                                <span><span>{objLang.updated_text}</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='detail-subcontainer'>
                        <div className='detail-img'>
                            <Image src='/images/others/robot-customer-service.png' alt='robot customer service' width={0} height={0} sizes='100%'/>
                            <h5>{objLang.processing.time ? objLang.processing.time : '102'}<span>S</span></h5>
                        </div>
                        <div className='detail-description-subcontainer'>
                            <p>{objLang.processing.title}</p>
                            <div className='flex flex-col gap-[4px'>
                                <span>{objLang.processing.content} </span>
                                <span><span>{objLang.updated_text} </span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ProductsAverageNewSection
