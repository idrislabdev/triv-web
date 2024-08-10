import { IStaking } from '@/@core/@types/interfaces'
import Image from 'next/image'
import React from 'react'

const CardCoinStaking = (props: {item:IStaking}) => {
    const { item } = props
    return (
        <div className='card-coin-staking'>
            <div className='card-coin-logo'>
                <Image src={item.icon_url} alt={item.label}width={226} height={101}/>
            </div>
            <div className='card-coin-desc'>
                <label>{item.label}</label>
                <span>Staking Ethereum dengan Bunga {item.apy}%/tahun sekarang.</span>
                <a>Stake Now</a>
            </div>
        </div>
  )
}

export default CardCoinStaking
