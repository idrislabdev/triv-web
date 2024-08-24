import { SearchIcon } from '@/@core/components/custom-icons'
import Image from 'next/image'
import React from 'react'

const FaqsSearchSection = (props: {objLang:any}) => {
    const { objLang } = props
        return (
            <section className='faqs-search-section'>
                <div className='search-container'>
                    <div className='image-subcontainer'>
                        <Image src='/images/others/3d-faq.png' alt='3d-faq' width={0} height={0} sizes='100%'/>
                    </div>
                    <div className='form-subcontainer'>
                        <h2>Frequently Asked Questions</h2>
                        <div className='group-input append'>
                            <span className='append'><SearchIcon color={'#fff'} /></span>
                            <input className='color-2' placeholder='Cari artikel bantuan disini'/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

export default FaqsSearchSection
