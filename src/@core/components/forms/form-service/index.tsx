"use client"

import React, { useState } from 'react'

const FormService = (props: {objProduct:any}) => {
    const {objProduct} = props
    const [buttonType, setButtonType] = useState('buy')
    return (
        <div className='form-service'>
            <div className={`button-tab ${buttonType}`}>
                <button className={`!rounded-tl-[4px] !rounded-bl-[4px] ${buttonType === "buy" ? 'active' : ''}`} onClick={_ => setButtonType('buy')}>Beli</button>
                <button className={`!rounded-tr-[4px] !rounded-br-[4px] ${buttonType === "sell" ? 'active' : ''}`} onClick={_ => setButtonType('sell')}>Jual</button>
            </div>
            <h5 className='title'>Buy {objProduct.name} Starting from IDR 50,000!</h5>
            <p className='description'>Enter the purchase amount:</p>
            <label className='nominal'>Rp 0</label>
            <div className='button-group'>
                <button>100.000</button>
                <button>500.000</button>
                <button>1.000.000</button>
                <button>2.000.000</button>
            </div>
            <div className='get-input'>
                <label>You will get:</label>
                <div className='label-value'>
                    <span>{objProduct.code} 0</span>
                </div>
            </div>
            <button className='btn-primary'>Buy {objProduct.name} Now</button>
        </div>
  )
}

export default FormService
