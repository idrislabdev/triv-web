"use client"

import Image from 'next/image'
import React, { useState } from 'react'

const StakingCalculatorSection = (props: {objLang:any}) => {
    const { objLang } = props
    const [selectedAsset, setSelectedAsset] = useState('ETH')

    return (
        <section className='staking-calculator-section'>
            <div className='card-staking-calculator'>
                <div className='image-container'>
                    <Image src='/images/devices/iphone-social-media.png' alt='fee icon' width={372} height={233}/>
                </div>
                <div className='calculator-container'>
                    <div className='top-subcontainer'>
                        <h2>{objLang.title}</h2>
                        <div className='sub-subcontainer'>
                            <div className='form-input'>
                                <label>Stake Asset</label>
                                <select defaultValue={selectedAsset}>
                                    <option value="ETH">ETH</option>
                                    <option value="FTM">FTM</option>
                                    <option value="GRT">GRT</option>
                                </select>
                            </div>
                            <div className='form-input'>
                                <label>Amount Stake</label>
                                <div className='group-input'>
                                    <input />
                                    <span className='prepend'>ETH</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='middle-subcontainer'>
                        <div className='sub-subcontainer'>
                            <label>4-6<span>%</span></label>
                            <span>Annual Yield (Est.)</span>
                        </div>
                        <div className='sub-subcontainer'>
                            <label>0.0291992<span>ETH</span></label>
                            <span>Daily Reward (Est.)</span>
                        </div>
                        <div className='sub-subcontainer'>
                            <label>0.389029<span>ETH</span></label>
                            <span>Yearly Reward (Est.)</span>
                        </div>
                    </div>
                    <div className='bottom-subcontainer'>
                        <p>{objLang.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StakingCalculatorSection
