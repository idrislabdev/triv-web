"use client"
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import React from 'react'
import { ILiverateMini } from '@/@core/@types/interfaces';
import Marquee from "react-fast-marquee";
import { formatterNumber } from '@/@core/utils/general';

const HomeIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='home-index-crypto-section'>
             <Marquee>
                    {liverates.map((item:ILiverateMini, index:number) => (
                        <div className='index-cyrpto-content' key={index}>
                            <div className='crypto-title'>
                                <label>{item.code} <span>{item.currency} {formatterNumber(item.rate)}</span></label>
                            </div>
                            <div className='crypto-index'>
                                <label><CaretUpIcon color={'#71BBED'} /><span className='text-red-600'>{item.change_24h}%</span></label>
                            </div>
                        </div>
                    ))}
             </Marquee>
        </section>
    )
}

export default HomeIndexCryptoSection
