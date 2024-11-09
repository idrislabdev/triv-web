"use client"
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import React from 'react'
import { ILiverateMini } from '@/@core/@types/interfaces';
import Marquee from "react-fast-marquee";

const HomeIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='home-index-crypto-section'>
             <Marquee>
                    {liverates.map((item:ILiverateMini, index:number) => (
                        <div className='index-cyrpto-content' key={index}>
                            <div className='crypto-title'>
                                <label>BTC <span>Rp 10.000.000</span></label>
                            </div>
                            <div className='crypto-index'>
                                <label><CaretUpIcon color={'#71BBED'} /><span className='text-red-600'>8.08%</span></label>
                            </div>
                        </div>
                    ))}
             </Marquee>
        </section>
    )
}

export default HomeIndexCryptoSection
