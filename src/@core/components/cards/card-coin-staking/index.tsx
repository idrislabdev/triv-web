import { IStaking } from '@/@core/@types/interfaces'
import Image from 'next/image'
import React from 'react'

const CardCoinStaking = (props: {item:IStaking, objLang:any}) => {
    const { item, objLang } = props
    return (
        <div className='card-coin-staking-new'>
            <div className='card-coin-desc'>
                <label>{item.label}</label>
                <span className='span-text'>{objLang.text_card_1} {item.label} <span> {objLang.text_card_2} {item.apy}% / </span>{objLang.text_card_3}</span>
                <span className='span-label'>{objLang.text_card_4} {item.apy}%</span>
            </div>
            <div className='card-coin-logo'>
                <Image src={item.icon_url} alt={item.label}width={226} height={101}/>
            </div>
            <div className='card-button'>
                <a>Stake Now</a>
            </div>
        </div>
  )
}

export default CardCoinStaking
