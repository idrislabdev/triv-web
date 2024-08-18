"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const StocksCalculatorSection = (props: {langObj:any}) => {
    const { langObj } = props
    const [selectedAsset, setSelectedAsset] = useState('Bank Transfer')

    return (
        <section className='stocks-calculator-section'>
            <div className='card-stocks-calculator'>
                <div className='image-container'>
                    <Image src='/images/devices/iphone-social-media.png' alt='fee icon' width={372} height={233}/>
                </div>
                <div className='calculator-container'>
                    <div className='top-subcontainer'>
                        <h2>{langObj.title}</h2>
                        <p>{langObj.description}</p>
                        <div className='sub-subcontainer'>
                            <div className='form-input'>
                                <label>{langObj.payment_method}</label>
                                <select defaultValue={selectedAsset}>
                                    <option value="Bank Transfer">Bank Transfer</option>
                                    <option value="OVO">OVO</option>
                                </select>
                            </div>
                            <div className='form-input'>
                                <label>{langObj.amount}</label>
                                <div className='group-input'>
                                    <input />
                                    <span className='prepend'>IDR</span>
                                </div>
                            </div>
                        </div>
                        <button>{langObj.button_text}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StocksCalculatorSection
