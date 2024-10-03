import { IStaking } from '@/@core/@types/interfaces'
import CardCoinStaking from '@/@core/components/cards/card-coin-staking'
import React from 'react'

const StakingCoinsSection = (props: {stakings:IStaking[], objLang:any}) => {
    const { stakings, objLang } = props
    return (
        <section className='staking-coins-section'>
            <div className='header-coins-staking'>
                <h2>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                <p>{objLang.description}</p>
            </div>
            <div className='list-coins-staking'>
            {stakings?.map((item:IStaking, index:number) => (
                <div className='coin-staking-container' key={index}>
                    <CardCoinStaking item={item} key={index} objLang={objLang}/>
                </div>
            ))}
            </div>
        </section>
    )
}

export default StakingCoinsSection
