import { IStaking } from '@/@core/@types/interfaces'
import CardCoinStaking from '@/@core/components/cards/card-coin-staking'
import React from 'react'

const StakingCoinsSection = (props: {stakings:IStaking[], lang:string}) => {
    const { stakings, lang } = props
    return (
        <section className='staking-coins-section'>
            <div className='header-coins-staking'>
                <h2>{lang.title}</h2>
                <p>{lang.description}</p>
            </div>
            <div className='list-coins-staking'>
            {stakings?.map((item:IStaking, index:number) => (
                <div className='coin-staking-container' key={index}>
                    <CardCoinStaking item={item} key={index}/>
                </div>
            ))}
            </div>
        </section>
    )
}

export default StakingCoinsSection
