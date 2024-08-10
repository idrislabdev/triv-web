import { IStaking } from '@/@core/@types/interfaces'
import CardCoinStaking from '@/@core/components/cards/card-coin-staking'
import React from 'react'

const StakingCoinsSection = (props: {stakings:IStaking[]}) => {
    const { stakings } = props
    return (
        <section className='staking-coins-section'>
            <div className='header-coins-staking'>
                <h2>Coin Apa Saja Yang Bisa di Staking di TRIV?</h2>
                <p>Mulailah dari sekarang. Pilih aset favorit dan tumbuhkan kriptomu bersama TRIV, Crypto Staking terbaik di Indonesia</p>
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
