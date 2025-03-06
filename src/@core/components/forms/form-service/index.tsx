"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import en from "@/app/dictionaries/general/en.json";
import id from "@/app/dictionaries/general/id.json";
const FormService = (props: {lang:any, objProduct:any, imgObj:string, objLang:any}) => {
    const {lang, objProduct, imgObj, objLang} = props
    const [buttonType, setButtonType] = useState('buy')
    let objLangForm:any;
    if (lang == 'id') {
        objLangForm = id.form;
    } else {
        objLangForm = en.form;
    }
    return (
        <div className='form-service'>
            <div className={`button-tab ${buttonType}`}>
                <button className={`!rounded-tl-[4px] !rounded-bl-[4px] ${buttonType === "buy" ? 'active' : ''}`} onClick={_ => setButtonType('buy')}>{objLangForm.buy}</button>
                <button className={`!rounded-tr-[4px] !rounded-br-[4px] ${buttonType === "sell" ? 'active' : ''}`} onClick={_ => setButtonType('sell')}>{objLangForm.sell}</button>
            </div>
            {imgObj == '' && <h5 className='title'>{objLangForm.buy_long.replaceAll("__label__", objProduct.name)}</h5> }
            {imgObj != '' &&  
                <div className='form-title'>
                    <h5><span className='capitalize'>{buttonType}</span></h5> <Image src={imgObj} alt={objProduct.name} width={0} height={0} sizes='100%'/>
                    <h5 className='sm:mr-[4px] md:mr-[4px]'>Starting from</h5>
                    <h5>IDR 50,000!</h5>
                </div>
                // <h5 className='title'>Buy <span><Image src={imgObj} alt={objProduct.name} width={0} height={0} sizes='100%'/></span> Starting from IDR 50,000!</h5>
            }
            <p className='description'>{objLangForm.purchase}</p>
            <label className='nominal'>Rp 0</label>
            <div className='button-group'>
                <button>100.000</button>
                <button>500.000</button>
                <button>1.000.000</button>
                <button>2.000.000</button>
            </div>
            <div className='get-input'>
                <label>{objLangForm.you_will_get}</label>
                <div className='label-value'>
                    <span>{objProduct.code} 0</span>
                </div>
            </div>
            <button className='btn-primary'><span className='capitalize'>{objLangForm[buttonType]} {objProduct.name} {objLangForm.now}</span></button>
        </div>
  )
}

export default FormService
