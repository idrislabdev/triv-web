"use client"
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import React from 'react'
import { ILiverateMini } from '@/@core/@types/interfaces';
import Marquee from "react-fast-marquee";
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general';

const FuturesIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='futures-index-crypto-section'>
             <Marquee>
                {liverates.map((item:ILiverateMini, index:number) => (
                    <div className='index-cyrpto-content' key={index}>
                        <div className='crypto-title'>
                            <label>{item.code} <span>Rp {formatterNumber2(item.rate.toString().replace(".", ","))}</span></label>
                        </div>
                        <div className='crypto-index'>
                            <label>
                                {item.change_24h > 0 && <CaretUpIcon color={'#71BBED'} />}
                                {item.change_24h < 0 && <CaretDownIcon color={'#EB5757'} />}
                                <span className={item.change_24h < 0 ? 'minus' : 'plus'}>{item.change_24h}%</span>
                            </label>
                        </div>
                    </div>
                ))}
             </Marquee>
        </section>
    )
}

export default FuturesIndexCryptoSection
