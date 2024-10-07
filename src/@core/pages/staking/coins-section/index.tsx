import { IStaking } from '@/@core/@types/interfaces'
import CardCoinStaking from '@/@core/components/cards/card-coin-staking'
import React, { useEffect } from 'react'

const StakingCoinsSection = (props: {stakings:IStaking[], objLang:any}) => {
    const { stakings, objLang } = props
    const inViewport = () => {
        const elements = document.getElementsByClassName("staking-coins-section");
        var element = elements[0];
    
        const { top, bottom } = element.getBoundingClientRect();
    
        if(window.innerHeight > top && bottom > 0) {
          document.getElementsByClassName("staking-coins-section")[0].classList.add('animate')
        } else {
          document.getElementsByClassName("staking-coins-section")[0].classList.remove('animate')
        }
      }
    
    useEffect(() => {
        window.addEventListener("scroll", inViewport, { passive: true });
        document.getElementsByClassName("staking-coins-section")[0].classList.add('animate')
    });
    return (
        <section className='staking-coins-section'>
            <div className='header-coins-staking'>
                <h2 className='fade-in entry-1'>{objLang.title_1} <span>{objLang.title_2}</span> {objLang.title_3}</h2>
                <p className='fade-in entry-2'>{objLang.description}</p>
            </div>
            <div className='list-coins-staking'>
                {stakings?.map((item:IStaking, index:number) => (
                    <div className={`coin-staking-container fade-in`} style={{animationDelay: `${0.5*(index+1)}s`}} key={index}>
                        <CardCoinStaking item={item} key={index} objLang={objLang}/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default StakingCoinsSection
