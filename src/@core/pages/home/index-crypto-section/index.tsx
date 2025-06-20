"use client"
import { CaretDownIcon, CaretUpIcon } from '@/@core/components/custom-icons';
import React from 'react'
import { ILiverateMini } from '@/@core/@types/interfaces';
import Marquee from "react-fast-marquee";
import { formatterNumber, formatterNumber2 } from '@/@core/utils/general';

const HomeIndexCryptoSection = (props : {liverates:ILiverateMini[]}) => {
    const {liverates} = props
    return (
        <section className='home-index-crypto-section'>
             <Marquee>
                    {liverates.map((item:ILiverateMini, index:number) => (
                        <div className='index-cyrpto-content' key={index}>
                            <div className='crypto-title'>
                                <label>{item.code} <span>Rp {formatterNumber2(item.rate.toString().replace(".", ","))}</span></label>
                            </div>
                            <div className='crypto-index'>
                                <label>
                                    {item.change_24h < 0 && 
                                        <>
                                            <CaretDownIcon color={'#EB5757'} />
                                            <span className='text-[#EB5757]'>{item.change_24h * -1}%</span>
                                        </>
                                    }
                                    {item.change_24h > 0 && 
                                        <>
                                            <CaretUpIcon color={'#71BBED'} />
                                            <span className='text-[#71BBED]'>{item.change_24h}%</span>
                                        </>
                                    }
                                </label>
                            </div>
                        </div>
                    ))}
             </Marquee>
        </section>
    )
}

export default HomeIndexCryptoSection
